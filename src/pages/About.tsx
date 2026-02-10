import AboutUs from '../components/about/AboutUs'
import AlwaysCloseSection from '../components/about/AlwaysCloseSection'
import Certificates from '../components/about/Certificates'
import CoreCompetencies from '../components/about/CoreCompetencies'
import FacilityGallery from '../components/about/FacilityGallery'
import MissionVision from '../components/about/MissonVision'
import QuoteSection from '../components/about/QuoteSection'
import StatCounters from '../components/about/StatCounter'

const About = () => {
  return (
    <>
      <AboutUs />
      <AlwaysCloseSection />
      <MissionVision />
      <StatCounters />
      <CoreCompetencies />
      <FacilityGallery />
      <Certificates />
      <QuoteSection />
    </>
  )
}

export default About
