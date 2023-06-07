import { useState } from 'react';
import { searchMovies } from '@/api/api';
import { SearchIcon } from './Icons';

export default function Header() {
  // state variables
  const [searchKey, setSearchKey] = useState('');

  return (
    <header className='w-full fixed bg-[#1B264F]'>
      <h1 className='py-3 text-white text-center text-3xl tracking-[0.75rem]'>
        MoviesDB
      </h1>

      <form className='max-w-3xl relative mx-3 mt-2 pb-3 md:mx-auto'>
        <input
          id='search'
          className='w-full p-2 pr-[3.25rem] rounded-lg focus:outline-none'
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <button 
          className='absolute top-0 right-0 px-2 py-1 text-black bg-[#2892D7] rounded-r-lg hover:bg-[#1D70A2]'
          onClick={(e) => {
            e.preventDefault();
            searchMovies(searchKey);
          }}
        >
          <SearchIcon />
        </button>
      </form>
    </header>
  );
}
