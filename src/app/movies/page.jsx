import { getPopularMovies } from '@/api/api'
import MovieCards from '@/components/MovieCards'

export default async function Movies() {
  const popularMovies = await getPopularMovies()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {popularMovies.map(({ id, title, posterPath }) => {
          return (
            <MovieCards key={id} id={id} image={posterPath} title={title} />
          )
        })}
      </section>
    </main>
  )
}
