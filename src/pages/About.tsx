import AboutHero from '../components/about/AboutHero'
import AboutUs from '../components/about/AboutUs'
import AlwaysCloseSection from '../components/about/AlwaysCloseSection'
import Certificates from '../components/about/Certificates'
import CoreCompetencies from '../components/about/CoreCompetencies'
import FacilityGallery from '../components/about/FacilityGallery'
import MissionVision from '../components/about/MissonVision'
import StatCounters from '../components/about/StatCounter'

const About = () => {
  return (
    <>
     <AboutHero />
      <AboutUs />
      <AlwaysCloseSection />
      <MissionVision />
      <StatCounters />
      <CoreCompetencies />
      <FacilityGallery />
      <Certificates />
    </>
  )
}

export default About
