import { Routes,Route } from "react-router-dom"
import Landing from "./pages/Landing"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App