import { Routes, Route } from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar"
import Home from "./pages/Home/Home"

function App() {
  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
