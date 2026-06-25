import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Journal from "./pages/Journal/Journal"

function App() {
  
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal/:id" element={<Journal />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
