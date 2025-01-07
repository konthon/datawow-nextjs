import {
  Button,
  createListCollection,
  Dialog,
  Field,
  HStack,
  IconButton,
  Input,
  Spinner,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { FC, useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { CreatePostInput } from '@/GraphQL/_generated'
import { request } from '@/libs/graphql-request'
import { communitiesQuery } from '@/queries/community'
import { ourPostsQuery, postQuery, postsQuery } from '@/queries/post'

import { CloseIcon } from '../Icons'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../ui/select'
import { usePostDialogStore } from './usePostDialog'

interface Props extends Omit<Dialog.RootProps, 'children'> {}

const defaultValues: Partial<CreatePostInput> = {
  title: '',
  content: '',
}

const PostDialog: FC<Props> = (props) => {
  const open = usePostDialogStore((state) => state.open)
  const postId = usePostDialogStore((state) => state.postId)
  const onClose = usePostDialogStore((state) => state.onClose)

  const dialogContentRef = useRef<HTMLDivElement>(null)

  const { data: communitiesData } = useQuery(communitiesQuery())
  const communities = createListCollection({
    items: communitiesData?.communities || [],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id.toString(),
  })

  const { data, isLoading } = useQuery({
    ...postQuery({ postId: postId! }),
    enabled: !!postId,
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePostInput>({ defaultValues })

  const queryClient = useQueryClient()
  const { mutate: create, isPending: isCreating } = useMutation({
    mutationKey: ['create', 'post'],
    mutationFn: request.createPost,
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: postsQuery().queryKey })
      queryClient.invalidateQueries({ queryKey: ourPostsQuery().queryKey })
      queryClient.invalidateQueries({
        queryKey: postQuery({ postId: result.createPost.id }).queryKey,
      })
      onClose()
    },
  })
  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationKey: ['update', 'post'],
    mutationFn: request.updatePost,
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: postsQuery().queryKey })
      queryClient.invalidateQueries({ queryKey: ourPostsQuery().queryKey })
      queryClient.invalidateQueries({
        queryKey: postQuery({ postId: result.updatePost.id }).queryKey,
      })
      onClose()
    },
  })

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    if (postId) {
      update({ postId, updatePostInput: values })
    } else {
      create({ createPostInput: values })
    }
  }

  useEffect(() => {
    if (data?.post) {
      reset({
        title: data.post.title,
        content: data.post.content,
        communityId: data.post.community.id,
      })
    }
  }, [data])

  return (
    <Dialog.Root
      size='lg'
      open={open}
      onOpenChange={onClose}
      onExitComplete={() => {
        reset(defaultValues)
      }}
      {...props}
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content ref={dialogContentRef} py={8} px={{ base: 4, md: 8 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Header p={0}>
              <HStack>
                <Dialog.Title flexGrow={1}>
                  {postId ? 'Edit Post' : 'Create Post'}
                </Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <IconButton size='xs' variant='plain'>
                    <CloseIcon boxSize='10px' />
                  </IconButton>
                </Dialog.CloseTrigger>
              </HStack>
            </Dialog.Header>
            <Dialog.Body px={0} py={8}>
              <Stack>
                <Controller
                  control={control}
                  name='communityId'
                  rules={{
                    required: {
                      value: true,
                      message: 'Please select a community',
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <Field.Root required invalid={fieldState.invalid}>
                      <SelectRoot
                        collection={communities}
                        name={field.name}
                        value={[field.value?.toString()]}
                        onValueChange={({ value }) =>
                          field.onChange(value?.[0] ? +value[0] : undefined)
                        }
                        onInteractOutside={field.onBlur}
                      >
                        <SelectTrigger
                          borderWidth='1px'
                          borderColor='success'
                          borderRadius='md'
                        >
                          <SelectValueText
                            placeholder='Choose a community'
                            color='success'
                          />
                        </SelectTrigger>
                        <SelectContent portalRef={dialogContentRef}>
                          {communities.items.map((community) => (
                            <SelectItem key={community.id} item={community}>
                              {community.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </SelectRoot>
                      <Field.ErrorText>
                        {fieldState.error?.message}
                      </Field.ErrorText>
                    </Field.Root>
                  )}
                />
                <Field.Root required invalid={!!errors.title}>
                  <Input
                    placeholder='Title'
                    {...register('title', {
                      required: {
                        value: true,
                        message: 'Please fill out title',
                      },
                    })}
                  />
                  <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
                </Field.Root>
                <Field.Root required invalid={!!errors.content}>
                  <Textarea
                    placeholder='What’s on your mind...'
                    rows={8}
                    {...register('content', {
                      required: {
                        value: true,
                        message: 'Please fill out content',
                      },
                    })}
                  />
                  <Field.ErrorText>{errors.content?.message}</Field.ErrorText>
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer p={0}>
              <Stack gap={3} flexDirection={{ base: 'column', md: 'row' }}>
                <Button
                  variant='outline'
                  colorPalette='green'
                  borderColor='success'
                  color='success'
                  disabled={isCreating || isUpdating}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isLoading || isCreating || isUpdating}
                >
                  {isCreating || isUpdating ? (
                    <Spinner />
                  ) : (
                    <>{postId ? 'Confirm' : 'Post'}</>
                  )}
                </Button>
              </Stack>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default PostDialog
