import { queryOptions } from '@tanstack/react-query'

import { request } from '@/libs/graphql-request'

export const useQueryMe = () =>
  queryOptions({
    queryKey: ['me'],
    queryFn: () => request.me(),
  })
