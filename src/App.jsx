// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Producto from './components/producto/Producto'
import Navbar from './components/Nav/nav'
import Footer from './components/footer/Footer'
import WhatsappButton from './components/whatsapp/whatsappButton'
import AboutUs from './components/aboutUs/AboutUs'
import Contact from './components/contact/Contact'
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/vmcloud" element={<Producto />} /> *
    <Route path='/nosotros' element={<AboutUs/>} />
      <Route path='/contacto' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
         <WhatsappButton />
    </Router>
  )
}

export default App

