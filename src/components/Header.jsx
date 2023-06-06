import { SearchIcon } from './Icons';

export default function Header() {
  return (
    <header className='w-full fixed bg-[#1B264F]'>
      <h1 className='py-3 text-white text-center text-3xl tracking-[0.75rem]'>
        MoviesDB
      </h1>

      <div className='max-w-3xl relative mx-3 mt-2 pb-3 md:mx-auto'>
        <input
          id='search'
          className='w-full p-2 pr-[3.25rem] rounded-lg'
          type='text'
          placeholder='Search'
        />

        <button className='absolute top-0 right-0 px-2 py-1 text-black bg-[#2892D7] rounded-r-lg hover:bg-[#1D70A2]'>
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
