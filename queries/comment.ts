import { queryOptions } from '@tanstack/react-query'

import { CommentsQueryVariables } from '@/GraphQL/_generated'
import { request } from '@/libs/graphql-request'

export const commentsQuery = ({ postId }: CommentsQueryVariables) =>
  queryOptions({
    queryKey: ['post', postId, 'comments'],
    queryFn: () => request.comments({ postId }),
  })
