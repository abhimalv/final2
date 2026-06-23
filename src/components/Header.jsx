import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function Header() {
  const itemCount = useCartStore((state) => state.items.length)

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="text-3xl font-bold text-primary hover:text-secondary transition">
          <span className="text-secondary">Fancy</span>Cloth
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link to="/" className="font-semibold text-primary hover:text-secondary transition">
            Home
          </Link>
          <Link to="/products" className="font-semibold text-primary hover:text-secondary transition">
            Shop
          </Link>
          <a href="#about" className="font-semibold text-primary hover:text-secondary transition">
            About
          </a>
          <a href="#contact" className="font-semibold text-primary hover:text-secondary transition">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative">
            <button className="text-2xl text-primary hover:text-secondary transition">
              🛒
            </button>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <button className="btn btn-primary">Sign In</button>
        </div>
      </div>
    </header>
  )
}
