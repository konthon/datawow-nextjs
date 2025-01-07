import { queryOptions } from '@tanstack/react-query'

import {
  OurPostsQueryVariables,
  PostQueryVariables,
  PostsQueryVariables,
} from '@/GraphQL/_generated'
import { request } from '@/libs/graphql-request'

export const postsQuery = (variables?: PostsQueryVariables) =>
  queryOptions({
    queryKey: variables ? ['posts', variables] : ['posts'],
    queryFn: () => request.posts(variables),
  })

export const postQuery = ({ postId }: PostQueryVariables) =>
  queryOptions({
    queryKey: ['post', postId],
    queryFn: () => request.post({ postId }),
  })

export const ourPostsQuery = (variables?: OurPostsQueryVariables) =>
  queryOptions({
    queryKey: variables ? ['me', 'posts', variables] : ['me', 'posts'],
    queryFn: () => request.ourPosts(variables),
  })
