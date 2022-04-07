import { Routes, Route } from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar"
import Home from "./pages/Home/Home"
import LoginForm from "./components/AuthForm/LoginForm"
import RegisterForm from "./components/AuthForm/RegisterForm"
import Products from "./pages/Products/Products"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {
  return (
    <div>
      {/* <MenuBar /> */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
