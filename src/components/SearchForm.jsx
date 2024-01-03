'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from './Icons'

export default function SearchForm() {
  const [searchKey, setSearchKey] = useState('')
  const [openSearch, setOpenSearch] = useState(false)
  const router = useRouter()

  // function to open search input
  const handleOpen = () => setOpenSearch(!openSearch)
  // form functions
  const handleChange = (e) => setSearchKey(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchKey) return

    router.push(`/search/${searchKey}`)
  }

  return (
    <form className='flex justify-end sm:w-60' onSubmit={handleSubmit}>
      <input
        id='search'
        className={`${
          openSearch ? 'inline' : 'hidden'
        } absolute w-screen h-12 top-20 left-0 z-50 text-lg indent-3 border-t-2 border-b-2 border-solid border-y-[#E3E3E3] focus:outline-none sm:inline sm:w-full sm:h-9 sm:static sm:border-0 sm:rounded-l-full`}
        type='text'
        placeholder='Search'
        onChange={handleChange}
      />

      {/* mobile search button */}
      <button
        type='button'
        aria-label='Open search input'
        className='sm:hidden'
        onClick={handleOpen}
      >
        <SearchIcon />
      </button>

      {/* desktop search button */}
      <button
        type='submit'
        className='hidden sm:inline sm:px-2 sm:bg-white sm:rounded-r-full'
        aria-label='Submit'
      >
        <SearchIcon />
      </button>
    </form>
  )
}
