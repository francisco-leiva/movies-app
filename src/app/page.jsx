import MovieList from '@/components/MovieList'
import { getPopularMovies } from '@/api/api'

export default async function Home() {
  const popularMovies = await getPopularMovies()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <MovieList movieList={popularMovies} />
      </section>
    </main>
  )
}
