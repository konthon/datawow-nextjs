import { create } from 'zustand'

import { Post } from '@/GraphQL/_generated'

interface DeletePostDialogStore {
  postId?: Post['id']
  open: boolean
  onOpen: (postId: Post['id']) => void
  onClose: () => void
}

export const useDeletePostDialogStore = create<DeletePostDialogStore>(
  (set) => ({
    postId: undefined,
    open: false,
    onOpen: (postId) => {
      set({ open: true, postId })
    },
    onClose: () => {
      set({ open: false, postId: undefined })
    },
  }),
)
