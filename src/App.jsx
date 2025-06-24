// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/home/Home'
import Producto from '../src/components/producto/Producto'
import NavBar from './components/Nav/NavBar.jsx'
import Footer from '../src/components/footer/Footer'
import WhatsappButton from '../src/components/whatsapp/WhatsappButton.jsx'
import AboutUs from './components/aboutUs/AboutUs'
import Contact from './components/contact/Contact'
function App() {
  return (
    <Router>
      <NavBar />
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

