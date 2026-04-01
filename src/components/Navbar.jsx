import { ShoppingCart } from 'lucide-react'

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 py-4">
      <div className="navbar-start">
        <a href="#" className="text-xl font-bold">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><a href="#" className="link link-hover">Products</a></li>
          <li><a href="#" className="link link-hover">Features</a></li>
          <li><a href="#" className="link link-hover">Pricing</a></li>
          <li><a href="#" className="link link-hover">Testimonials</a></li>
          <li><a href="#" className="link link-hover">FAQ</a></li>
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
        </div>
        <button className="btn btn-outline btn-sm">Login</button>
        <button className="btn btn-primary btn-sm">Get Started</button>
      </div>
    </div>
  )
}
