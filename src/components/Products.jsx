import { toast } from 'react-toastify'
import { products } from './productsData'

export default function Products({ cart, addToCart }) {
  const handleBuyNow = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  const isInCart = (productId) => cart.some(item => item.id === productId)

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-2">Premium Digital Tools</h2>
      <p className="text-center text-base-content/70 mb-8 max-w-2xl mx-auto">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => {
          const inCart = isInCart(product.id)
          return (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">
                    <img src={product.icon} alt={product.name} className="w-12 h-12" />
                  </span>
                  <span 
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.tagType === 'best-seller' 
                        ? 'bg-[#FEF3C6] text-yellow-800' 
                        : product.tagType === 'popular' 
                        ? 'bg-[#E1E7FF]' 
                        : 'bg-[#DBFCE7] text-green-800'
                    } ${
                      product.tagType === 'popular' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                        : ''
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
                <h3 className="card-title">{product.name}</h3>
                <p className="text-sm text-base-content/70">{product.description}</p>
                <ul className="mt-4 space-y-1">
                  {product.features.map((feat, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="text-success">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <span className="text-sm ml-2">/{product.period}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleBuyNow(product)}
                    className={`btn w-full ${inCart ? 'bg-success text-white hover:bg-success' : ''}`}
                    disabled={inCart}
                    style={inCart ? { borderRadius: '30px', backgroundColor: '#07973cd7', color: 'white' } : { borderRadius: '30px', background: 'linear-gradient(135deg, #8B5CF6 0%, #4F39F6 100%)', border: 'none', color: 'white' }}
                  >
                    {inCart ? '✓ Added to Cart!' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
