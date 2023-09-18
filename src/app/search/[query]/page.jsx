import MovieList from '@/components/MovieList'
import NoResults from '@/components/NoResults'
import { searchMovies } from '@/api/api'

export default async function Search({ params }) {
  const { query } = params
  const search = await searchMovies(query)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {search.length ? <MovieList movieList={search} /> : <NoResults />}
      </section>
    </main>
  )
}
