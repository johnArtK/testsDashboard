import { Link } from "react-router-dom"

export const ButtonBack = () => (
  <Link to="/">
    <div style={{ position: "fixed", bottom: 50 }}>
      &#60;&nbsp;<span>Back</span>
    </div>
  </Link>
)
