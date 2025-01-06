import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import React, { FC, PropsWithChildren, useState } from 'react'

import { MINUTE } from '@/shared/time'

import { toaster } from '../Toaster'

const QueryProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            staleTime: 5 * MINUTE,
          },
        },
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (!mutation.meta?.ignoreGlobalError) {
              if (error instanceof ClientError) {
                const graphQLErrors = error.response.errors || []
                graphQLErrors.slice(0, 5).forEach((err) => {
                  toaster.create({
                    type: 'error',
                    description: err.message || 'Error',
                  })
                })
                return
              }
            }
          },
        }),
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
