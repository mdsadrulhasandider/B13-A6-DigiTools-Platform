import { ShoppingCart, X } from 'lucide-react'
import { toast } from 'react-toastify'

export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleRemove = (id, name) => {
    removeFromCart(id)
    toast.success(`${name} removed from cart`)
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!')
      return
    }
    toast.success('Proceeding to checkout...')
    setTimeout(() => {
      clearCart()
      toast.success('Order placed successfully! Cart cleared.')
    }, 1500)
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCart className="w-24 h-24 mx-auto text-base-content/30 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {cart.map(item => (
          <div key={item.id} className="card bg-base-100 shadow-sm border">
            <div className="card-body p-4 flex-row justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                    <img src={item.icon} alt={item.name} className="w-12 h-12" />
                  </span>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-base-content/70">{item.description}</p>
                  <div className="mt-1">
                    <span className="text-lg font-bold">${item.price}</span>
                    <span className="text-sm ml-1">/{item.period}</span>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-ghost btn-sm text-error"
                onClick={() => handleRemove(item.id, item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold text-primary">${total}</span>
            </div>
            <button className="btn btn-primary btn-block" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
