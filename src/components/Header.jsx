import Link from 'next/link';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className='w-full fixed bg-[#1B264F]'>
      <h1 className='py-3 text-white text-center text-3xl tracking-[0.5rem]'>
        <Link href={'/'}>MoviesDB</Link>
      </h1>

      <SearchForm />
    </header>
  );
}
