import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins, Proza_Libre } from 'next/font/google'
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

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const prozaLibre = Proza_Libre({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-proza-libre',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Makkar Bakers - Handmade Egg-Free Cakes',
  description:
    'Delicious handmade, egg-free cakes made with local ingredients for your special celebrations.',
  keywords:
    'bakery, egg-free, cakes, handmade, local ingredients, celebrations',
  authors: [{ name: 'Makkar Bakers' }],
  creator: 'Makkar Bakers',
  publisher: 'Makkar Bakers',
  metadataBase: new URL('https://dadalicious.com'),
  openGraph: {
    title: 'Makkar Bakers - Handmade Egg-Free Cakes',
    description:
      'Delicious handmade, egg-free cakes made with local ingredients for your special celebrations.',
    url: 'https://dadalicious.com',
    siteName: 'Makkar Bakers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Makkar Bakers - Handmade Egg-Free Cakes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makkar Bakers - Handmade Egg-Free Cakes',
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${prozaLibre.variable}`}
    >
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
