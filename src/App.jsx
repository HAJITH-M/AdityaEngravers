import React from 'react'
// import NavBar from './components/NavBar/NavBar'
import Carousal from './components/Carousal/Carousal'
import HeroSection from './components/HeroSection/HeroSection'
import AdityaSupportHub from './components/AdityaSupportHub/AdityaSupportHub'
import Navbar2 from './components/NavBar/NavBar2'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'
import OurMission from './components/AboutComponent/OurMission/OurMission'
import AboutContent from './components/AboutComponent/AboutContent/AboutContent'
import LeadershipTeam from './components/AboutComponent/LeaderShipTeam/LeaderShipTeam'
import OurService from './components/Service/OurService'

const App = () => {
  return (
<>
{/* <NavBar/> */}

{/* home */}
<Navbar2/>
<Carousal/>
<HeroSection/>
<AdityaSupportHub/>
<Awards/>
<Contact/>

{/* about */}
<OurMission/>
<AboutContent/>
<LeadershipTeam/>

{/* Our Services */}
<OurService/>
</>  )
}

export default App