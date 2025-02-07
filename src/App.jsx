import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

function App() {
// #1F1E24
  return (
    <>
      <div className="w-screen h-screen bg-[#1F1E24]">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
