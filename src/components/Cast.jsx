'use client'

import { useState } from 'react'
import CastCard from './CastCard'

export default function Cast({ cast }) {
  const [showAll, setShowAll] = useState(false)

  const actors = showAll ? cast : cast.slice(0, 6)

  const toggleShowAll = () => setShowAll(!showAll)

  return (
    <section className='max-w-5xl mx-3 px-2 pb-4 bg-slate-100 lg:mx-auto'>
      <div className='flex justify-between py-4'>
        <h2 className='text-3xl font-bold uppercase'>Actors</h2>

        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            value=''
            className='sr-only peer'
            onChange={toggleShowAll}
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className='ms-2 text-base font-medium text-gray-900'>
            Show all
          </span>
        </label>
      </div>

      <div className='flex gap-6 flex-nowrap overflow-x-auto overflow-y-hidden md:flex-wrap lg:mx-3'>
        {actors.map(({ id, name, character, profilePath }) => {
          return (
            <CastCard
              key={id}
              name={name}
              character={character}
              profilePath={profilePath}
            />
          )
        })}
      </div>
    </section>
  )
}
