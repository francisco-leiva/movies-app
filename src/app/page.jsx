'use client'

import { useState } from 'react'
import { Pagination } from '@nextui-org/react'
import { getTrendingShows } from '@/api/api'
import MovieCards from '@/components/MovieCards'
import TvCards from '@/components/TvCards'

export default async function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const trendingShows = await getTrendingShows(currentPage)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-11rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {trendingShows.map(({ id, title, posterPath, type }) => {
          if (type === 'movie') {
            return (
              <MovieCards key={id} id={id} image={posterPath} title={title} />
            )
          } else {
            return <TvCards key={id} id={id} image={posterPath} title={title} />
          }
        })}
      </section>

      <div className='max-w-4xl mx-auto'>
        <Pagination
          page={currentPage}
          total={10}
          onChange={setCurrentPage}
          className='w-fit mx-auto my-4'
        />
      </div>
    </main>
  )
}
