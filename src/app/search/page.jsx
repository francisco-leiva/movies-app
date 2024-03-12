'use client'

import { searchShows } from '@/api/api'
import MovieCards from '@/components/MovieCards'
import TvCards from '@/components/TvCards'
import CustomPagination from '@/components/CustomPagination'
import NoResults from './components/NoResults'

export default async function SearchPage({ searchParams }) {
  const { q, page } = searchParams
  const searchResults = await searchShows(q, page)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-11rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {searchResults ? (
          searchResults.results.map(({ id, title, posterPath, type }) => {
            if (type === 'movie') {
              return (
                <MovieCards key={id} id={id} image={posterPath} title={title} />
              )
            } else {
              return (
                <TvCards key={id} id={id} image={posterPath} title={title} />
              )
            }
          })
        ) : (
          <NoResults />
        )}
      </section>

      {searchResults && (
        <CustomPagination
          path={'search'}
          query={q}
          totalPages={searchResults.totalPages}
        />
      )}
    </main>
  )
}
