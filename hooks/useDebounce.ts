import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type UseDebounce<T> = [T, Dispatch<SetStateAction<T>>]

function useDebounce<T>(value: T, delay?: number): UseDebounce<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return [debouncedValue, setDebouncedValue]
}

export { useDebounce }
