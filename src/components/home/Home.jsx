// src/pages/Home.jsx
import Nav from '../Nav/nav'
import Footer from '../footer/Footer'
import HeroSection from '../hero/hero'
import SolutionsSection from '../solutions/Solutions'
import StatsSection from '../statSection/statsSection'
import Certificaciones from '../certificaciones/Certificaciones'
import Banner from '../banner/Banner'
import ButtonAgen from '../buttonAgen/ButtonAgen'
import Reviews from '../reviews/Reviews'
import BannerYT from '../bannerYT/BannerYT'
import HeroCarousel from '../heroCarusel/HeroCarusel'
import WhatsappButton from '../whatsapp/whatsappButton'

export default function Home() {
  return (
    <>
      <Nav/>
      <HeroCarousel />
      <SolutionsSection />
      <StatsSection />
      <ButtonAgen />
      <BannerYT />
      <Reviews />
      <Certificaciones />
      <Footer />
      <WhatsappButton />
    </>
  )
}
