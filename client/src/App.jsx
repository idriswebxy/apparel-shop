import { Routes, Route, Router } from "react-router-dom"
import { lazy, Suspense, Fragment } from "react"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import NavBar from "./components/Menu/NavBar"
import ProductsPage from "./pages/Products/ProductsPage"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import Loader from "./components/Loader/Spinner"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Page404 from "./pages/Page404/Page404"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute isAuthenticated={true} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
