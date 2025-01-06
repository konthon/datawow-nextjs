import { useQuery } from '@tanstack/react-query'

import { meQuery } from '@/queries/auth'

export const useAuth = () => {
  const queryResult = useQuery(meQuery())
  return {
    me: queryResult.data?.me,
    isLoggedIn:
      !!queryResult.data && !queryResult.isLoading && !queryResult.isError,
    ...queryResult,
  }
}
