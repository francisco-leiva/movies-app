import { getMoviesNowPlaying } from '@/api/api'
import MovieList from '@/components/MovieList'

export default async function Movies() {
  const moviesNowPlaying = await getMoviesNowPlaying()

  return (
    <main className='pt-24'>
      <section className='max-w-4xl w-full px-2 pb-8 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <MovieList movieList={moviesNowPlaying} />
      </section>
    </main>
  )
}
