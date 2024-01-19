import Link from 'next/link'
import { NAVBAR_LINKS } from '@/utils/constants'
import SearchForm from './SearchForm'
import MobileNavbar from './MobileNavbar'

export default function Header() {
  return (
    <header className='w-full h-20 fixed bg-blue-950 z-50'>
      <section className='max-w-4xl relative h-full flex items-center justify-between px-2 sm:mx-auto lg:px-0'>
        <div className='flex items-center gap-6'>
          <h1 className='mainTitle h-10 text-3xl tracking-[.25rem] bg-titleGradient'>
            <Link href={'/'}>CineFlix</Link>
          </h1>

          <nav className='hidden sm:inline'>
            <ul className='flex gap-5 text-white text-xl'>
              {NAVBAR_LINKS.map((link) => {
                return (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className='flex gap-2'>
          <SearchForm />
          <MobileNavbar />
        </div>
      </section>
    </header>
  )
}
