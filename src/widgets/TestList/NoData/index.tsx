import { Button } from "../../../shared/ui/Button"
import "./index.css"

export const NoData = ({ onClick }: { onClick: () => void }) => (
  <div className="noData">
    <span>Your search did not match any results.</span>
    <Button text="Reset" onClick={onClick} />
  </div>
)
