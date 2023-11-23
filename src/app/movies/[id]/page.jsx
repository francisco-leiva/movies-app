import { Suspense } from 'react'
import { getMovieDetails } from '@/api/api'
import MovieDetails from '@/components/MovieDetails'
import Loading from '@/app/loading'

export default async function MovieDetailsPage({ params }) {
  const { id } = params
  const details = await getMovieDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <Suspense fallback={<Loading />}>
        <MovieDetails details={details} />
      </Suspense>
    </main>
  )
}
