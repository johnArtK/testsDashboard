import { useEffect, useState } from "react"
import { fetchTestById } from "../api/testApi"
import { Test } from "./types"

export function useTest(testId: number | null) {
  const [test, setTest] = useState<Test | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (testId == null) return

    setLoading(true)
    fetchTestById(testId)
      .then((data) => {
        setTest(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message || "Error fetching test")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [testId])

  return { test, setTest, loading, error }
}
