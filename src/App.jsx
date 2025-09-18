import './App.css'
import Header from './components/header'
import Slider from './components/slider'
import Product from './components/products'
import Footer from './components/footer'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import Products from './pages/Products'
import Signup from './pages/Signup'
import ScrollToTop from './components/ScrollToTop';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
       <ScrollToTop/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">

            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Slider />
                    <Product />
                  </>
                }
              />
              
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />

              {/* Explore Page */}
              <Route path="/explore" element={<Explore />} />
            

              {/* Products Page */}
              <Route path="/products" element={<Products />} />

              {/* Signup Page */}
              <Route path="/signup" element={<Signup />} />

            </Routes>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
