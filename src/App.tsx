import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { Results } from "./pages/Results"
import { Finalize } from "./pages/Finalize"
import { Dashboard } from "./pages/Dashboard"
import "./app.css"

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results/:testId" element={<Results />} />
        <Route path="/finalize/:testId" element={<Finalize />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </div>
)

export default App
