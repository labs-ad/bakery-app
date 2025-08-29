import { Product, Category } from '@/types/menu'

export const categories: Category[] = [
  {
    id: 'cookies',
    name: 'Cookies',
    slug: 'cookies',
    description: 'Handmade cookies with love',
  },
  {
    id: 'waffles',
    name: 'Waffles',
    slug: 'waffles',
    description: 'Crispy golden waffles',
  },
  {
    id: 'macaroons',
    name: 'Macaroons',
    slug: 'macaroons',
    description: 'Delicate French macaroons',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    slug: 'snacks',
    description: 'Perfect for any time of day',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    slug: 'beverages',
    description: 'Refreshing drinks',
  },
]

export const products: Product[] = [
  // Cookies
  {
    id: 'choco-chip-cookies',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies made with premium chocolate',
    price: 12.99,
    image: '/menu/cookies-1.jpg',
    category: 'cookies',
    featured: true,
  },
  {
    id: 'oatmeal-cookies',
    title: 'Oatmeal Cookies',
    description: 'Hearty oatmeal cookies with raisins',
    price: 10.99,
    image: '/menu/cookies-2.jpg',
    category: 'cookies',
  },
  {
    id: 'sugar-cookies',
    title: 'Sugar Cookies',
    description: 'Sweet and simple sugar cookies',
    price: 9.99,
    image: '/menu/cookies-3.jpg',
    category: 'cookies',
  },

  // Waffles
  {
    id: 'belgian-waffles',
    title: 'Belgian Waffles',
    description: 'Traditional Belgian waffles with syrup',
    price: 15.99,
    image: '/menu/waffles-1.jpg',
    category: 'waffles',
    featured: true,
  },

  // Macaroons
  {
    id: 'french-macaroons-mixed',
    title: 'French Macaroons (Mixed)',
    description: 'Assorted flavors of delicate French macaroons',
    price: 24.99,
    image: '/menu/macaroons-1.jpg',
    category: 'macaroons',
    featured: true,
  },
  {
    id: 'pistachio-macaroons',
    title: 'Pistachio Macaroons',
    description: 'Elegant pistachio flavored macaroons',
    price: 18.99,
    image: '/menu/macaroons-2.jpg',
    category: 'macaroons',
  },
  {
    id: 'chocolate-macaroons',
    title: 'Chocolate Macaroons',
    description: 'Rich chocolate macaroons',
    price: 20.99,
    image: '/menu/macaroons-3.jpg',
    category: 'macaroons',
  },

  // Snacks
  {
    id: 'popcorn-mix',
    title: 'Gourmet Popcorn Mix',
    description: 'Sweet and savory popcorn blend',
    price: 8.99,
    image: '/menu/snacks-1.jpg',
    category: 'snacks',
  },
  {
    id: 'honey-crackers',
    title: 'Honey Crackers',
    description: 'Crispy crackers with honey glaze',
    price: 7.99,
    image: '/menu/snacks-2.jpg',
    category: 'snacks',
  },

  // Beverages
  {
    id: 'matcha-latte',
    title: 'Matcha Latte',
    description: 'Creamy matcha latte with steamed milk',
    price: 5.99,
    image: '/menu/beverages-1.jpg',
    category: 'beverages',
  },
  {
    id: 'iced-coffee',
    title: 'Iced Coffee',
    description: 'Cold brew coffee with ice',
    price: 4.99,
    image: '/menu/beverages-2.jpg',
    category: 'beverages',
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.category === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}
