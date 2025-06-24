// src/pages/Home.jsx

import SolutionsSection from '../solutions/Solutions'
import StatsSection from '../statSection/statsSection'
import Certificaciones from '../certificaciones/Certificaciones'
import ButtonAgen from '../buttonAgen/ButtonAgen'
import Reviews from '../reviews/Reviews'
import BannerYT from '../bannerYT/BannerYT'
import HeroCarousel from '../heroCarusel/HeroCarusel'


export default function Home() {
  return (
    <>
      
      <HeroCarousel />
      <SolutionsSection />
      <StatsSection />
      <ButtonAgen />
      <BannerYT />
      <Reviews />
      <Certificaciones />
      {/* <Footer /> */}
   
    </>
  )
}
