import './globals.css'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from './loading'

export const metadata = {
  title: 'Cineflix',
  description:
    'Discover popular movies and tv shows, search for any movie you like and find some details about them.',
  keywords: [
    'Movies',
    'Series',
    'TV Shows',
    'Movie Search',
    'TV Show Search',
    'Movie Catalog',
    'TV Show Details',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />

        <Suspense fallback={<Loading />}>{children}</Suspense>

        <Footer />
      </body>
    </html>
  )
}
