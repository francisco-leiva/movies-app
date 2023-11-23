import { Suspense } from 'react'
import { getPopularMovies } from '@/api/api'
import ListOfShows from '@/components/ListOfShows'
import Loading from '../loading'

export default async function Movies() {
  const popularMovies = await getPopularMovies()

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <Suspense fallback={<Loading />}>
          <ListOfShows list={popularMovies} />
        </Suspense>
      </section>
    </main>
  )
}
