import { useState, useEffect } from "react"
import { fetchTests } from "../api/testApi"
import { fetchSites } from "../api/siteApi"
import { Test } from "./types"

export function useTests() {
  const [tests, setTests] = useState<Test[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchTests(), fetchSites()])
      .then(([testsData, sitesData]) => {
        const combinedData: Test[] = testsData.map((test) => ({
          ...test,
          site: sitesData.find((site) => site.id === test.siteId) || null,
        }))

        setTests(combinedData)
        setError(null)
      })
      .catch((err) => {
        setError(err.message || "Error")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { tests, loading, error }
}
