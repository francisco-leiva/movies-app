import SearchForm from './SearchForm'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='w-full h-20 fixed bg-blue-950 z-50'>
      <section className='max-w-4xl relative h-full flex items-center justify-between px-2 sm:mx-auto lg:px-0'>
        <Navbar />

        <SearchForm />
      </section>
    </header>
  )
}
