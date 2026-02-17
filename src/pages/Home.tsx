import Hero from '../components/home/Hero'
import ProductShowcase from '../components/home/ProductShowcase'
import WheelArchSection from '../components/home/WheelArchSection'
import AboutTeaserList from '../components/home/AboutTeaserList'

const Home = () => {
  return (
    <>
      <Hero />
      <WheelArchSection />
      <ProductShowcase />
      <AboutTeaserList />
    </>
  )
}

export default Home
