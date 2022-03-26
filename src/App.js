import { Routes, Route } from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"

function App() {
  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
