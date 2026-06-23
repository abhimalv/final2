import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../store/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578926314433-5ca06ba28bfd?w=1200&h=400&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        <div className="container relative z-10 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-secondary">FancyCloth</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover premium fashion for every style and occasion
          </p>
          <Link to="/products" className="btn btn-secondary text-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Men', icon: '👕', color: 'from-blue-400 to-blue-600' },
            { name: 'Women', icon: '👗', color: 'from-pink-400 to-pink-600' },
            { name: 'Accessories', icon: '👜', color: 'from-purple-400 to-purple-600' }
          ].map((cat) => (
            <Link key={cat.name} to="/products" className={`h-48 rounded-lg bg-gradient-to-br ${cat.color} text-white flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}>
              <span className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </span>
              <h3 className="text-2xl font-bold">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary text-lg px-8 py-3">
            View All Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Why Choose FancyCloth?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Quality', desc: 'All products are carefully selected for quality', icon: '✨' },
              { title: 'Fast Shipping', desc: 'Quick and reliable delivery worldwide', icon: '📦' },
              { title: 'Best Prices', desc: 'Competitive prices with seasonal discounts', icon: '💰' }
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-gray-200">Get exclusive offers and latest fashion updates</p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none"
            />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
