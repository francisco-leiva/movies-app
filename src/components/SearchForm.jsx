'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SearchIcon } from './Icons'

export default function SearchForm() {
  const [searchKey, setSearchKey] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchKey}`)
  }

  const handleChange = (e) => {
    setSearchKey(e.target.value)
  }

  return (
    <form className='w-60 flex' onSubmit={handleSubmit}>
      <input
        id='search'
        className='w-full h-9 indent-3 rounded-l-full focus:outline-none'
        type='text'
        placeholder='Search'
        onChange={handleChange}
      />

      <button className='px-2 bg-white rounded-r-full' aria-label='Submit'>
        <Link href={`/search/${searchKey}`} aria-label='Search movies'>
          <SearchIcon />
        </Link>
      </button>
    </form>
  )
}
