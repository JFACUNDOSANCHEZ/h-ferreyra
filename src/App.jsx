// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Producto from './components/producto/Producto'
import Navbar from './components/Nav/nav'
import Footer from './components/footer/Footer'
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/vmcloud" element={<Producto />} /> *
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App

