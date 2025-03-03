import { useState, useEffect } from "react"

export function useDebaunce<T>(value: T, delay: number = 500) {
  const [debauncedValue, setDebauncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebauncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debauncedValue
}
