// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
// import Contact from './pages/Contact' // si tenés otras páginas

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  )
}

export default App

