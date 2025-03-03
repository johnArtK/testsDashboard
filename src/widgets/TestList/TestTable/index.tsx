import { useNavigate } from "react-router-dom"
import { Test, TestStatus } from "../../../entities/test/model/types"
import { SortOrder } from "../../../entities/utils/sortTests"
import { Button } from "../../../shared/ui/Button"
import "./index.css"

interface TestTableProps {
  tests: Test[]
  onSort: () => void
  sortOrder: SortOrder
}

const SITE_COLORS: Record<number, string> = {
  1: "#E14165",
  2: "#c2c2ff",
  3: "#8686ff",
}

const STATUS_COLORS = {
  DRAFT: "#5C5C5C",
  ONLINE: "#1BDA9D",
  PAUSED: "#FF8346",
  STOPPED: "#FE4848",
}

export const TestTable = ({ tests, onSort, sortOrder }: TestTableProps) => {
  const navigate = useNavigate()

  return (
    <table className="test-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th onClick={onSort}>
            <span className="table-header-type">TYPE</span>
            {sortOrder === "asc" ? (
              <img src="/icons/ShevronUp.svg" alt="" />
            ) : (
              <img src="/icons/ShevronDown.svg" alt="" />
            )}
          </th>
          <th>STATUS</th>
          <th>SITE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tests.map((test) => (
          <tr key={test.id}>
            <td
              style={{ borderLeft: `3px solid ${SITE_COLORS[test.siteId]}` }}
              className="table-name"
            >
              {test.name}
            </td>
            <td>{test.type}</td>
            <td style={{ color: `${STATUS_COLORS[test.status]}` }}>
              {test.status}
            </td>
            <td>{test.site?.url ?? ""}</td>
            <td>
              {test.status !== TestStatus.DRAFT ? (
                <Button
                  onClick={() => navigate(`/finalize/${test.id}`)}
                  text="Results"
                />
              ) : (
                <Button
                  onClick={() => navigate(`/results/${test.id}`)}
                  text="Finalize"
                  color="#7D7D7D"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
