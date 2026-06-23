export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FancyCloth</h3>
            <p className="text-gray-300">Premium fashion and accessories for everyone.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition">Home</a></li>
              <li><a href="#" className="hover:text-secondary transition">Shop</a></li>
              <li><a href="#" className="hover:text-secondary transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary transition">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-secondary transition">f</a>
              <a href="#" className="text-2xl hover:text-secondary transition">🐦</a>
              <a href="#" className="text-2xl hover:text-secondary transition">📷</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 FancyCloth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
