import { Button, Dialog, Spinner } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'

import { toaster } from '@/components/Toaster'
import { request } from '@/libs/graphql-request'
import { commentsQuery } from '@/queries/comment'
import { ourPostsQuery, postQuery, postsQuery } from '@/queries/post'

import { useDeletePostDialogStore } from './useDeletePostDialog'

const DeletePostDialog: FC = () => {
  const postId = useDeletePostDialogStore((state) => state.postId!)
  const open = useDeletePostDialogStore((state) => state.open)
  const onClose = useDeletePostDialogStore((state) => state.onClose)

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete', 'post'],
    mutationFn: () => request.deletePost({ postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQuery().queryKey })
      queryClient.invalidateQueries({ queryKey: ourPostsQuery().queryKey })
      queryClient.removeQueries({ queryKey: postQuery({ postId }).queryKey })
      queryClient.removeQueries({
        queryKey: commentsQuery({ postId }).queryKey,
      })
      onClose()
      toaster.create({
        type: 'success',
        description: 'Deleted post successfully',
      })
    },
  })

  return (
    <Dialog.Root size='sm' open={open} onOpenChange={onClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content px={6} py={8}>
          <Dialog.Header p={0} mb={2}>
            <Dialog.Title
              textAlign='center'
              whiteSpace={{ base: 'normal', sm: 'pre-wrap' }}
              fontSize='lg'
            >
              {'Please confirm if you wish to \ndelete the post'}
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body p={0} textAlign='center' color='gray.500'>
            Are you sure you want to delete the post? Once deleted, it cannot be
            recovered.
          </Dialog.Body>
          <Dialog.Footer
            p={0}
            mt={6}
            alignItems='stretch'
            justifyContent='stretch'
            flexDirection={{ base: 'column', md: 'row-reverse' }}
          >
            <Button
              flexGrow={1}
              colorPalette='red'
              onClick={() => mutate()}
              disabled={isPending}
            >
              {isPending ? <Spinner /> : 'Delete'}
            </Button>
            <Button
              onClick={onClose}
              flexGrow={1}
              variant='outline'
              disabled={isPending}
            >
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default DeletePostDialog
