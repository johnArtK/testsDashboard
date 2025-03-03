import { useMemo, useState } from "react"
import { useTests } from "../../entities/test/model/useTests"
import { SortOrder, sortTestsByType } from "../../entities/utils/sortTests"
import { TestFilter } from "../../widgets/TestList/TestFilter"
import { TestTable } from "../../widgets/TestList/TestTable"
import { useDebaunce } from "../../shared/utils/useDebaunce"
import { NoData } from "../../widgets/TestList/NoData"
import "./index.css"

export const Dashboard = () => {
  const { tests, loading, error } = useTests()
  const [filter, setFilter] = useState("")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  const debouncedFilter = useDebaunce(filter, 300)

  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      test.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
    )
  }, [tests, debouncedFilter])

  const sortedTests = useMemo(() => {
    return sortTestsByType(filteredTests, sortOrder)
  }, [filteredTests, sortOrder])

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  if (error) {
    return <main className="dashboard-page">Error: {error}</main>
  }

  return (
    <main className="dashboard-page">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <header>
            <h2>Dashboard</h2>
          </header>
          <section>
            <TestFilter
              filterValue={filter}
              onChange={setFilter}
              count={sortedTests.length}
            />
          </section>
          <section>
            {sortedTests.length === 0 && filter ? (
              <NoData onClick={() => setFilter("")} />
            ) : (
              <TestTable
                tests={sortedTests}
                onSort={handleSort}
                sortOrder={sortOrder}
              />
            )}
          </section>
        </>
      )}
    </main>
  )
}
