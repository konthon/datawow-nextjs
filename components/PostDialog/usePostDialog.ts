import { Post } from '@/GraphQL/_generated'
import { create } from 'zustand'

interface PostDialogStore {
  open: boolean
  onOpen: (postId?: Post['id']) => void
  onClose: () => void
  postId?: Post['id']
}

export const usePostDialogStore = create<PostDialogStore>((set) => ({
  open: false,
  postId: undefined,
  onOpen: (postId) => {
    set({ open: true, postId })
  },
  onClose: () => {
    set({ open: false, postId: undefined })
  },
}))
