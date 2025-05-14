import './App.css'
import Navbar from './components/Nav/nav'
import Footer from './components/footer/Footer'
import HeroSection from './components/hero/hero'
import SolutionsSection from './components/solutions/Solutions'
import StatsSection from './components/statSection/statsSection'
import Certificaciones from './components/certificaciones/Certificaciones'
import Banner from './components/banner/Banner'
import ButtonAgen from './components/buttonAgen/ButtonAgen'
function App() {


  return (
    <>
    <div>
    <Navbar></Navbar>
    <HeroSection/>
    <Banner />
    <ButtonAgen></ButtonAgen>
    <SolutionsSection />
    <StatsSection />
    <Certificaciones />
    <Footer />
    </div>
    </>
  )
}

export default App
