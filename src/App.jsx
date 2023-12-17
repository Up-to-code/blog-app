import { Route, Routes } from "react-router"
import Navbar from "./components/Shared/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <> 
   <Navbar/>
   <Routes>
    <Route index  element={<Home/>} /> 
   </Routes>
    </>
  )
}

export default App
