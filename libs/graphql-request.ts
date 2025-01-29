import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@/GraphQL/_generated'

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3001/graphql',
  {
    credentials: 'include',
  },
)
export const request = getSdk(client)
