import type { Metadata } from 'next'
import { MenuLayout } from '@/components/menu/MenuLayout'

export const metadata: Metadata = {
  title: 'Menu | Makkar Bakers - Handmade Egg-Free Cakes',
  description:
    'Browse our delicious selection of handmade, egg-free cakes, cookies, waffles, macaroons and more. Made fresh daily with premium local ingredients.',
  keywords:
    'bakery menu, egg-free cakes, cookies, waffles, macaroons, snacks, beverages, handmade, local ingredients',
  openGraph: {
    title: 'Menu | Makkar Bakers - Handmade Egg-Free Cakes',
    description:
      'Browse our delicious selection of handmade, egg-free cakes, cookies, waffles, macaroons and more. Made fresh daily with premium local ingredients.',
    url: 'https://dadalicious.com/menu',
    images: [
      {
        url: '/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Makkar Bakers Menu - Delicious Egg-Free Treats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu | Makkar Bakers - Handmade Egg-Free Cakes',
    description:
      'Browse our delicious selection of handmade, egg-free cakes, cookies, waffles, macaroons and more.',
    images: ['/og-menu.jpg'],
  },
}

export default function MenuPage() {
  return <MenuLayout />
}
