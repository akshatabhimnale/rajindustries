import AdditionalServicesGrid from '../components/services/AdditionalServices'
import Capabilities from '../components/services/Capabilities'
import ProcessTimeline from '../components/services/ProcessTimeline'
import ServiceCards from '../components/services/ServiceCard'
import ServicesHero from '../components/services/ServiceHero'

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <Capabilities />
      <ProcessTimeline />
      <AdditionalServicesGrid />
    </>
  )
}

export default Services
