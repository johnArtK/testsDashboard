import { useParams } from "react-router-dom"
import { useTest } from "../../entities/test/model/useTest"
import { ButtonBack } from "../../shared/ui/ButtonBack"
import "./index.css"

export const Results = () => {
  const { testId } = useParams()

  const { test, loading, error } = useTest(testId ? Number(testId) : null)

  if (loading) {
    return <main>Loading test...</main>
  }

  if (error) {
    return <main>Error: {error}</main>
  }

  if (!test) {
    return <main>No test data found.</main>
  }

  return (
    <main className="results">
      <header>
        <h2>Results for {test.name}</h2>
        <span> {test.name}</span>
      </header>
      <ButtonBack />
    </main>
  )
}