import { getTrendingTvShows } from '@/api/api'
import TvCards from '@/components/TvCards'

export default async function Tv() {
  const trendingTvShows = await getTrendingTvShows()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-10rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {trendingTvShows.map(({ id, title, posterPath }) => {
          return <TvCards key={id} id={id} image={posterPath} title={title} />
        })}
      </section>
    </main>
  )
}
