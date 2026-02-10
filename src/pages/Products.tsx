import ProductGallery from '../components/products/ProductGallery'
import ProductsHero from '../components/products/ProductsHero'
import ProductTabs from '../components/products/ProductTabs'
import RequestQuoteCTA from '../components/products/RequestQuoteCTA'

const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductTabs />
      <ProductGallery />
      <RequestQuoteCTA />
    </>
  )
}

export default Products
