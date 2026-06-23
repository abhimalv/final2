# FancyCloth - Premium Fashion E-Commerce Website

A modern, responsive e-commerce website built with React, featuring a beautiful cloth and fashion product showcase with shopping cart functionality.

## Features

✨ **Modern Design**: Clean and elegant UI with gradient backgrounds and smooth animations
🛍️ **Product Showcase**: Browse 12+ premium products across multiple categories
🏷️ **Category Filtering**: Filter products by Men, Women, and Accessories
🛒 **Shopping Cart**: Add/remove items, adjust quantities, view totals
⭐ **Product Ratings**: View customer ratings for each product
📱 **Responsive**: Fully responsive design that works on all devices
🎨 **Beautiful UI**: Tailwind CSS for modern styling

## Tech Stack

- **Frontend Framework**: React 18+
- **Routing**: React Router v6
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Font**: Poppins (Google Fonts)

## Project Structure

```
fancy-cloth-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Footer component
│   │   └── ProductCard.jsx   # Product card component
│   ├── pages/
│   │   ├── Home.jsx          # Homepage with hero and featured products
│   │   ├── Products.jsx      # Products catalog with filters
│   │   └── Cart.jsx          # Shopping cart page
│   ├── store/
│   │   ├── cartStore.js      # Zustand cart state
│   │   └── products.js       # Products and categories data
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
└── postcss.config.js         # PostCSS config
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd final2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Pages

### Home (/)
- Hero banner with call-to-action
- Category shortcuts (Men, Women, Accessories)
- Featured products showcase
- Why choose FancyCloth section
- Newsletter subscription

### Products (/products)
- Browse all products (12+ items)
- Filter by category (All, Men, Women, Accessories)
- Sort by price or rating
- Product cards with images, descriptions, and ratings

### Cart (/cart)
- View cart items with images
- Adjust quantities
- Remove items
- Order summary with tax calculation
- Free shipping
- Checkout button

## Features Details

### Product Categories
- **Men**: T-shirts, jackets, chinos, formal shirts
- **Women**: Dresses, blazers, jeans
- **Accessories**: Belts, sunglasses, scarves, watches

### Customization

To add more products, edit `src/store/products.js`:
```javascript
{
  id: 13,
  name: 'Product Name',
  category: 'Category',
  price: 99.99,
  image: 'image-url',
  description: 'Product description',
  rating: 4.5
}
```

## Color Scheme

- **Primary**: #1f2937 (Dark Gray)
- **Secondary**: #f59e0b (Amber/Gold)
- **Accent**: #10b981 (Green)

## Future Enhancements

- User authentication and profiles
- Product search functionality
- Wishlist feature
- Product reviews and comments
- Payment gateway integration
- Order tracking
- Admin dashboard

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ using React and Tailwind CSS
