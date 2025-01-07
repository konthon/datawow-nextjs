import { create } from 'zustand'

import { PostsQueryVariables } from '@/GraphQL/_generated'
import { useDebounce } from '@/hooks/useDebounce'

interface PostFilterStore {
  title?: PostsQueryVariables['title']
  communityId?: PostsQueryVariables['communityId']
  onTitleChange: (title: PostFilterStore['title']) => void
  onCommunityChange: (communityId: PostFilterStore['communityId']) => void
}

export const usePostFilterStore = create<PostFilterStore>((set) => ({
  title: undefined,
  communityId: undefined,
  onTitleChange: (title) => {
    set({ title })
  },
  onCommunityChange: (communityId) => {
    set({ communityId })
  },
}))

export const usePostFilter = () => {
  const title = usePostFilterStore((state) => state.title)
  const communityId = usePostFilterStore((state) => state.communityId)
  const [debouncedTitle] = useDebounce(title)

  return {
    title:
      debouncedTitle && debouncedTitle.length >= 2 ? debouncedTitle : undefined,
    communityId: communityId ?? undefined,
  }
}
