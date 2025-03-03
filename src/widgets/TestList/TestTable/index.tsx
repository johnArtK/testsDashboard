import { Test } from "../../../entities/test/model/types"
import { SortOrder } from "../../../entities/utils/sortTests"
import { StatusCell } from "./cells/StatusCell"
import { TypeCell } from "./cells/TypeCell"
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

export const TestTable = ({ tests, onSort, sortOrder }: TestTableProps) => (
  <table className="test-table">
    <thead>
      <tr>
        <th>NAME</th>
        <th onClick={onSort}>
          <TypeCell sortOrder={sortOrder} />
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
            <StatusCell satatus={test.status} testId={test.id} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
