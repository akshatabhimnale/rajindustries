
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'


function App() {

  return (
   <BrowserRouter>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/products" element={<Products />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
