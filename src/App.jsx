import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import NoFound from "./pages/NoFound"
import "./App.css"

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  </BrowserRouter>
  )
}


export default App;