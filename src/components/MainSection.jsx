import { useState } from 'react'
import { toast } from 'react-toastify'
import Products from './Products'
import Cart from './Cart'

export default function MainSection({ activeTab, setActiveTab, cart, addToCart, removeFromCart, clearCart }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`btn ${activeTab === 'products' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`btn ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === 'products' ? (
          <Products cart={cart} addToCart={addToCart} />
        ) : (
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        )}
      </div>
    </section>
  )
}
