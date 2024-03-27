'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from './Icons'

export default function SearchForm() {
  const inputRef = useRef()
  const [openSearch, setOpenSearch] = useState(false)
  const router = useRouter()

  // open search input
  const handleOpen = () => setOpenSearch(!openSearch)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return

    setOpenSearch(false)
    router.push(`/search?q=${inputRef.current.value}&page=1`)
  }

  return (
    <form className='h-9 sm:w-60 sm:flex' onSubmit={handleSubmit}>
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
          ref={inputRef}
          id='search'
          className='w-full h-14 text-lg indent-3 border-t-2 border-b-2 border-solid border-y-gray-300 focus:outline-none sm:h-9 sm:rounded-l-full sm:border-none'
          type='text'
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
