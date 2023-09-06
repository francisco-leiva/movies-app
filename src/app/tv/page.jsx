import { getPopularTvShows } from '@/api/api'
import TvCards from '@/components/TvCards'

export default async function Tv() {
  const popularTvShows = await getPopularTvShows()

  return (
    <main className='pt-24'>
      <section className='max-w-4xl w-full px-2 pb-8 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {popularTvShows.map((tvShow) => {
          return (
            <TvCards
              key={tvShow.id}
              id={tvShow.id}
              title={tvShow.title}
              image={tvShow.poster}
            />
          )
        })}
      </section>
    </main>
  )
}
