'use client'

import { getTrendingTvShows } from '@/api/api'
import TvCards from '@/components/TvCards'
import CustomPagination from '@/components/CustomPagination'

export default async function Tv({ searchParams }) {
  const { page } = searchParams
  const trendingTvShows = await getTrendingTvShows(page)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-11rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {trendingTvShows.map(({ id, title, posterPath }) => {
          return <TvCards key={id} id={id} image={posterPath} title={title} />
        })}
      </section>

      <CustomPagination path={'tv'} totalPages={10} />
    </main>
  )
}
