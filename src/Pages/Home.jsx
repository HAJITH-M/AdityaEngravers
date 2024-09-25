import React from 'react'
import Navbar2 from '../components/NavBar/NavBar2'
import CarouselComponent from '../components/Carousal/Carousal'
import HeroSection from '../components/HeroSection/HeroSection'
import AdityaSupportHub from '../components/AdityaSupportHub/AdityaSupportHub'
import Awards from '../components/Awards/Awards'

const Home = () => {
  return (
    <>
    {/* home */}
<CarouselComponent/>
<HeroSection/>
<AdityaSupportHub/>
<Awards/>
    </>
  )
}

export default Home