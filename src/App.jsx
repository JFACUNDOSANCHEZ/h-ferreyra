// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Producto from './components/producto/Producto';
import NavBar from './components/Nav/NavBar';
import Footer from './components/footer/Footer';
import WhatsappButton from './components/whatsapp/WhatsappButton';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vmcloud" element={<Producto />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsappButton />
    </Router>
  );
}

export default App;

