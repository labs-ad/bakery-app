import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dadalicious - Handmade Egg-Free Cakes',
  description:
    'Delicious handmade, egg-free cakes made with local ingredients for your special celebrations.',
  keywords:
    'bakery, egg-free, cakes, handmade, local ingredients, celebrations',
  authors: [{ name: 'Dadalicious Bakery' }],
  creator: 'Dadalicious Bakery',
  publisher: 'Dadalicious Bakery',
  metadataBase: new URL('https://dadalicious.com'),
  openGraph: {
    title: 'Dadalicious - Handmade Egg-Free Cakes',
    description:
      'Delicious handmade, egg-free cakes made with local ingredients for your special celebrations.',
    url: 'https://dadalicious.com',
    siteName: 'Dadalicious Bakery',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dadalicious Bakery - Handmade Egg-Free Cakes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dadalicious - Handmade Egg-Free Cakes',
    description:
      'Delicious handmade, egg-free cakes made with local ingredients for your special celebrations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <div id="root" className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
