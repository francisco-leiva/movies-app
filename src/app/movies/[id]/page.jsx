import { getMovieDetails } from '@/api/api'
import MovieDetails from '@/components/MovieDetails'

export default async function MovieDetailsPage({ params }) {
  const { id } = params
  const details = await getMovieDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <MovieDetails details={details} />
    </main>
  )
}
