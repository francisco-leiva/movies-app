'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from './Icons'

export default function SearchForm() {
  const [searchKey, setSearchKey] = useState('')
  const [openSearch, setOpenSearch] = useState(false)
  const router = useRouter()

  // open search input
  const handleOpen = () => setOpenSearch(!openSearch)
  // set search key
  const handleChange = (e) => setSearchKey(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchKey) return

    setOpenSearch(false)
    router.push(`/search/${searchKey}`)
  }

  return (
    <form className='h-9 sm:w-60' onSubmit={handleSubmit}>
      {/* mobile search */}
      <div className='sm:hidden'>
        <button
          type='button'
          aria-label='Open search input'
          onClick={handleOpen}
        >
          <SearchIcon />
        </button>

        <div
          className={`${
            openSearch ? 'block' : 'hidden'
          } absolute w-screen h-screen top-20 left-0 backdrop-blur-sm`}
        >
          <input
            id='search'
            className='w-full h-14 text-lg indent-3 border-t-2 border-b-2 border-solid border-y-gray-300 focus:outline-none'
            type='text'
            placeholder='Search'
            onChange={handleChange}
          />
        </div>
      </div>

      {/* desktop search */}
      <div className='hidden sm:flex'>
        <input
          id='search'
          className='w-4/5 h-9 rounded-l-full text-lg indent-3 focus:outline-none'
          type='text'
          placeholder='Search'
          onChange={handleChange}
        />

        <button
          type='submit'
          className='w-1/5 px-2 bg-white rounded-r-full'
          aria-label='Submit'
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  )
}
