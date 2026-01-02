import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home.jsx"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
