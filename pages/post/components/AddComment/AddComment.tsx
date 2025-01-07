import { toaster } from '@/components/Toaster'
import { CloseButton } from '@/components/ui/close-button'
import { CommentInput } from '@/GraphQL/_generated'
import { useAuth } from '@/hooks/useAuth'
import { request } from '@/libs/graphql-request'
import { commentsQuery } from '@/queries/comment'
import { ourPostsQuery, postQuery, postsQuery } from '@/queries/post'
import {
  Box,
  Button,
  Dialog,
  Field,
  HStack,
  Spinner,
  Textarea,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues: Partial<CommentInput> = {
  content: '',
}

const AddComment: FC = () => {
  const router = useRouter()
  const rawPostId = router.query.postId as string
  const postId = !Number.isNaN(+rawPostId) ? +rawPostId : undefined

  const { isLoggedIn } = useAuth()

  const isMobile = useBreakpointValue({ base: true, md: false })
  const { open, onOpen, onClose } = useDisclosure()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentInput>({ defaultValues })

  const onCancel = () => {
    onClose()
    reset(defaultValues)
  }

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ['add', 'comment'],
    mutationFn: request.addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQuery().queryKey })
      queryClient.invalidateQueries({ queryKey: ourPostsQuery().queryKey })
      if (postId) {
        queryClient.invalidateQueries({
          queryKey: commentsQuery({ postId }).queryKey,
        })
        queryClient.invalidateQueries({
          queryKey: postQuery({ postId }).queryKey,
        })
      }
      onClose()
      reset(defaultValues)
      toaster.create({
        type: 'success',
        description: 'Add comment successfully',
      })
    },
  })

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    if (postId) {
      mutate({ postId, commentInput: values })
    }
  }

  if (open) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {isMobile ? (
          <Dialog.Root open onOpenChange={onCancel}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content px={4} py={8}>
                <Dialog.Header p={0}>
                  <HStack>
                    <Dialog.Title flexGrow={1}>Add Comments</Dialog.Title>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton />
                    </Dialog.CloseTrigger>
                  </HStack>
                </Dialog.Header>
                <Dialog.Body px={0} pt={5} pb={8}>
                  <Field.Root required invalid={!!errors.content}>
                    <Textarea
                      rows={4}
                      placeholder='What’s on your mind...'
                      {...register('content', {
                        required: { value: true, message: 'Please fill in' },
                      })}
                    />
                    <Field.ErrorText>{errors.content?.message}</Field.ErrorText>
                  </Field.Root>
                </Dialog.Body>
                <Dialog.Footer
                  p={0}
                  flexDirection='column'
                  alignItems='stretch'
                  gap={2}
                >
                  <Button
                    variant='outline'
                    colorPalette='green'
                    borderColor='success'
                    color='success'
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                  <Button type='submit' disabled={isPending}>
                    {isPending ? <Spinner /> : 'Post'}
                  </Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>
        ) : (
          <Box>
            <Field.Root required invalid={!!errors.content}>
              <Textarea
                rows={4}
                placeholder='What’s on your mind...'
                {...register('content', {
                  required: { value: true, message: 'Please fill in' },
                })}
              />
              <Field.ErrorText>{errors.content?.message}</Field.ErrorText>
            </Field.Root>
            <HStack mt={2} justifyContent='flex-end'>
              <Button
                variant='outline'
                colorPalette='green'
                borderColor='success'
                color='success'
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button type='submit' disabled={isPending}>
                {isPending ? <Spinner /> : 'Post'}
              </Button>
            </HStack>
          </Box>
        )}
      </form>
    )
  }
  return (
    <Button
      variant='outline'
      colorPalette='green'
      borderColor='success'
      color='success'
      onClick={() => {
        if (isLoggedIn) {
          onOpen()
        } else {
          router.push('/sign-in')
        }
      }}
    >
      Add Comments
    </Button>
  )
}

export default AddComment
