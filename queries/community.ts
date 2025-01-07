import { queryOptions } from '@tanstack/react-query'

import { request } from '@/libs/graphql-request'
import { HOUR } from '@/shared/time'

export const communitiesQuery = () =>
  queryOptions({
    queryKey: ['communities'],
    queryFn: () => request.communities(),
    staleTime: 1 * HOUR,
    gcTime: 1 * HOUR,
  })
