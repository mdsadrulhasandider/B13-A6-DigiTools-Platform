import { useState } from 'react'
import { ShoppingCart, Menu, X, Trash2 } from 'lucide-react'

export default function Navbar({ cartCount, cart, removeFromCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleRemoveFromCart = (id, name) => {
    removeFromCart(id)
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <a href="#home" className="text-xl font-bold" onClick={() => handleNavClick('home')}>DigiTools</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><a href="#products" className="link link-hover" onClick={() => handleNavClick('products')}>Products</a></li>
          <li><a href="#features" className="link link-hover" onClick={() => handleNavClick('features')}>Features</a></li>
          <li><a href="#pricing" className="link link-hover" onClick={() => handleNavClick('pricing')}>Pricing</a></li>
          <li><a href="#steps" className="link link-hover" onClick={() => handleNavClick('steps')}>How It Works</a></li>
          <li><a href="#footer" className="link link-hover" onClick={() => handleNavClick('footer')}>Contact</a></li>
        </ul>
      </div>
      
      <div className="navbar-end gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart className="w-5 h-5" />
              <span className="badge badge-sm indicator-item">{cartCount}</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 shadow-xl w-80 mt-2">
            <div className="card-body">
              <h3 className="card-title text-sm">Shopping Cart</h3>
              {cart.length === 0 ? (
                <p className="text-sm text-base-content/70">Your cart is empty</p>
              ) : (
                <>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between p-2 bg-base-200 rounded">
                        <div className="flex items-center gap-2">
                          <img src={item.icon} alt={item.name} className="w-8 h-8" />
                          <div>
                            <p className="text-sm font-semibold">{item.name}</p>
                            <p className="text-xs text-base-content/70">${item.price}/{item.period}</p>
                          </div>
                        </div>
                        <button
                          className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                          onClick={() => handleRemoveFromCart(item.id, item.name)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-lg font-bold text-primary">${cartTotal}</span>
                  </div>
                  <div className="card-actions">
                    <button 
                      className="btn btn-primary btn-sm btn-block"
                      onClick={() => handleNavClick('products')}
                    >
                      View Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            className="btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="hidden lg:flex gap-2">
          <button className="btn btn-outline btn-sm">Login</button>
          <button className="btn btn-primary btn-sm">Get Started</button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden">
          <ul className="menu menu-vertical px-4 py-4 gap-2">
            <li><a href="#products" className="link link-hover" onClick={() => handleNavClick('products')}>Products</a></li>
            <li><a href="#features" className="link link-hover" onClick={() => handleNavClick('features')}>Features</a></li>
            <li><a href="#pricing" className="link link-hover" onClick={() => handleNavClick('pricing')}>Pricing</a></li>
            <li><a href="#steps" className="link link-hover" onClick={() => handleNavClick('steps')}>How It Works</a></li>
            <li><a href="#footer" className="link link-hover" onClick={() => handleNavClick('footer')}>Contact</a></li>
            <div className="divider my-2"></div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm flex-1">Login</button>
              <button className="btn btn-primary btn-sm flex-1">Get Started</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}
