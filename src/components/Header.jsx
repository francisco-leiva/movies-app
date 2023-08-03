import Link from 'next/link'
import SearchForm from './SearchForm'

export default function Header() {
  const links = [
    { name: 'Movies', href: '/movies' },
    { name: 'Series', href: '/series' },
  ]

  return (
    <header className='w-full h-20 fixed bg-[#1B264F] z-50'>
      <div className='max-w-4xl h-full mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <h1 className='mainTitle h-10 text-3xl tracking-[.25rem] bg-titleGradient'>
            <Link href={'/'}>CineFlix</Link>
          </h1>

          <nav>
            <ul className='flex gap-5 text-white text-2xl'>
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <SearchForm />
      </div>
    </header>
  )
}
