import { useParams } from "react-router-dom"
import { useTest } from "../../entities/test/model/useTest"
import { ButtonBack } from "../../shared/ui/ButtonBack"
import "./index.css"

export const Finalize = () => {
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
    <main className="finalize">
      <header>
        <h2>Finalize</h2>
        <span> {test.name}</span>
      </header>
      <ButtonBack />
    </main>
  )
}
