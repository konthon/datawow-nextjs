import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@/GraphQL/_generated'

const client = new GraphQLClient('http://localhost:3001/graphql', {
  credentials: 'include',
})
export const request = getSdk(client)
