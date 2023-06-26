'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchIcon } from './Icons';

export default function SearchForm() {
  const [searchKey, setSearchKey] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchKey}`);
  };

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <form
      className='max-w-3xl flex mx-3 mt-2 pb-3 md:mx-auto'
      onSubmit={handleSubmit}
    >
      <input
        id='search'
        className='w-full h-9 indent-3 rounded-l-lg focus:outline-none'
        type='text'
        placeholder='Search'
        onChange={handleChange}
      />

      <button className='px-2 text-black bg-[#2892D7] rounded-r-lg hover:bg-[#1D70A2]'>
        <Link href={`/search/${searchKey}`}>
          <SearchIcon />
        </Link>
      </button>
    </form>
  );
}
