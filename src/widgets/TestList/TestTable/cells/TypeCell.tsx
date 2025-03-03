import { SortOrder } from "../../../../entities/utils/sortTests"

export const TypeCell = ({ sortOrder }: { sortOrder: SortOrder }) => (
  <>
    <span className="table-header-type">TYPE</span>
    {sortOrder === "asc" ? (
      <img src="/icons/shevronUp.svg" alt="" />
    ) : (
      <img src="/icons/shevronDown.svg" alt="" />
    )}
  </>
)
