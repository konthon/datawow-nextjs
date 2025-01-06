import '@tanstack/react-query'
import { ClientError } from 'graphql-request'

interface AdditionalMutationMeta extends Record<string, unknown> {
  ignoreGlobalError?: boolean
  // ignoreLoading?: boolean
}

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: AdditionalMutationMeta
    defaultError: ClientError
  }
}
