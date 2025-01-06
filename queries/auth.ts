import { queryOptions } from '@tanstack/react-query'

import { request } from '@/libs/graphql-request'
import { HOUR } from '@/shared/time'

export const meQuery = () =>
  queryOptions({
    queryKey: ['me'],
    queryFn: () => request.me(),
    gcTime: 1 * HOUR,
  })
