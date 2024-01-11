import { getTrendingShows } from '@/api/api'
import MovieCards from '@/components/MovieCards'
import TvCards from '@/components/TvCards'

export default async function Home() {
  const trendingShows = await getTrendingShows()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
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
    </main>
  )
}
