'use client'

import { useState } from 'react'
import { SearchIcon } from './Icons'

export default function SearchForm() {
  const [openSearch, setOpenSearch] = useState(false)

  // open search input
  const handleOpen = () => setOpenSearch(!openSearch)

  return (
    <form action='/search' role='search' className='h-9 sm:w-60 sm:flex'>
      <button
        type='button'
        aria-label='Open search input'
        className='sm:hidden'
        onClick={handleOpen}
      >
        <SearchIcon />
      </button>

      <div
        className={`${
          openSearch ? 'block' : 'hidden'
        } absolute w-screen h-screen top-20 left-0 backdrop-blur-sm sm:w-48 sm:h-9 sm:inline-block sm:static sm:backdrop-blur-none`}
      >
        <input
          type='search'
          name='q'
          className='w-full h-14 text-lg indent-3 border-t-2 border-b-2 border-solid border-y-gray-300 focus:outline-none sm:h-9 sm:rounded-l-full sm:border-none'
          placeholder='Search'
        />
      </div>

      <button
        type='submit'
        className='hidden sm:inline sm:w-12 sm:px-2 sm:bg-white sm:rounded-r-full'
        aria-label='Submit'
      >
        <SearchIcon />
      </button>
    </form>
  )
}
