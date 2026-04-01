import { useState } from 'react'
import { toast } from 'react-toastify'
import Products from './Products'
import Cart from './Cart'

export default function MainSection({ activeTab, setActiveTab, cart, addToCart, removeFromCart, clearCart }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'products' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-sm rounded-full' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'cart' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-sm rounded-full' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('cart')}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'products' ? (
            <Products cart={cart} addToCart={addToCart} />
          ) : (
            <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
          )}
        </div>
      </div>
    </section>
  )
}
