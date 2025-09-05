import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { GlowingCursor } from "./components/GlowingCursor"

function App() {
  

  return (
    <>
    <GlowingCursor />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
