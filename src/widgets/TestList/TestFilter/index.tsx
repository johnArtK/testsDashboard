import { SearchIcon } from "../../../shared/ui/SearchIcon"
import "./index.css"

interface TestFilterProps {
  filterValue: string
  onChange: (value: string) => void
  count: number
}

export const TestFilter = ({
  filterValue,
  onChange,
  count,
}: TestFilterProps) => (
  <div className="test-filter">
    <div className="search-icon-filter">
      <SearchIcon />
    </div>
    <input
      value={filterValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder="What test are you looking for?"
    />
    <span className="test-count">{count} tests</span>
  </div>
)
