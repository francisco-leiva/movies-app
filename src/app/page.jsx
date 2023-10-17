import MovieCards from '@/components/MovieCards'
import TvCards from '@/components/TvCards'
import { getTrendingMoviesAndTvShows } from '@/api/api'

export default async function Home() {
  const trendingMoviesAndTvShows = await getTrendingMoviesAndTvShows()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {trendingMoviesAndTvShows.map((element) => {
          if (element.type === 'movie') {
            return (
              <MovieCards
                key={element.id}
                id={element.id}
                image={element.poster}
                title={element.title}
              />
            )
          } else {
            return (
              <TvCards
                key={element.id}
                id={element.id}
                image={element.poster}
                title={element.title}
              />
            )
          }
        })}
      </section>
    </main>
  )
}
