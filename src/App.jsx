import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="min-h-screen bg-base-100">
      <ToastContainer />
      <Navbar cartCount={cart.length} cart={cart} removeFromCart={removeFromCart} />
      <section id="home">
        <Banner />
      </section>
      <section id="features">
        <Stats />
      </section>
      <section id="products">
        <MainSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </section>
      <section id="steps">
        <Steps />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #5B4BFF 0%, #8B2BFF 100%)' }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Ready To Transform Your Workflow?</h2>
          <p className="text-sm text-white/80 mt-4">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              className="px-7 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'white',
                color: '#5B4BFF',
                borderRadius: '9999px'
              }}
            >
              Explore Products
            </button>
            <button
              className="px-7 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.65)',
                borderRadius: '9999px'
              }}
            >
              View Pricing
            </button>
          </div>

          <p className="text-xs text-white/70 mt-6">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App
