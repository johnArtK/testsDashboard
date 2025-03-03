import { useNavigate } from "react-router-dom"
import { TestStatus } from "../../../../entities/test/model/types"
import { Button } from "../../../../shared/ui/Button"

interface StatusCellProps {
  satatus: string
  testId: number
}

export const StatusCell = ({ satatus, testId }: StatusCellProps) => {
  const navigate = useNavigate()

  return (
    <>
      {satatus !== TestStatus.DRAFT ? (
        <Button
          onClick={() => navigate(`/finalize/${testId}`)}
          text="Results"
        />
      ) : (
        <Button
          onClick={() => navigate(`/results/${testId}`)}
          text="Finalize"
          color="#7D7D7D"
        />
      )}
    </>
  )
}
