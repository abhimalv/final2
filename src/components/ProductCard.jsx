import { useCartStore } from '../store/cartStore'

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {'⭐'.repeat(Math.floor(product.rating))}
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>
          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="btn btn-accent w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
