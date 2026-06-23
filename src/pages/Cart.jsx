import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>
        <p className="text-2xl text-gray-500 mb-8">Your cart is empty</p>
        <Link to="/products" className="btn btn-primary text-lg px-8 py-3">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.category}</p>
                  <p className="text-secondary font-bold text-lg">${item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1 h-fit">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-lg font-bold text-primary hover:text-secondary"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-lg font-bold text-primary hover:text-secondary"
                  >
                    +
                  </button>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-lg font-bold text-primary mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link to="/products" className="text-secondary font-semibold hover:text-accent mt-4 inline-block">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-accent">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-lg font-bold text-primary">
              <span>Total</span>
              <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
            </div>

            <button className="btn btn-secondary w-full mb-3 text-lg">
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="btn w-full border-2 border-gray-300 text-primary hover:bg-gray-100"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
