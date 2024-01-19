import './globals.css'
import Providers from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
