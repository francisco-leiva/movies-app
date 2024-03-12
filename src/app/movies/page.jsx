'use client'

import { getPopularMovies } from '@/api/api'
import MovieCards from '@/components/MovieCards'
import CustomPagination from '@/components/CustomPagination'

export default async function Movies({ searchParams }) {
  const { page } = searchParams
  const popularMovies = await getPopularMovies(page)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-11rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {popularMovies.map(({ id, title, posterPath }) => {
          return (
            <MovieCards key={id} id={id} image={posterPath} title={title} />
          )
        })}
      </section>

      <CustomPagination path={'movies'} totalPages={10} />
    </main>
  )
}
