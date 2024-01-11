import { getMovieDetails } from '@/api/api'
import MovieDetails from '@/components/MovieDetails'

export default async function MovieDetailsPage({ params }) {
  const { id } = params
  const {
    title,
    posterPath,
    tagline,
    description,
    releaseDate,
    runtime,
    backdropPath,
    genres,
  } = await getMovieDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <MovieDetails
        title={title}
        posterPath={posterPath}
        tagline={tagline}
        description={description}
        releaseDate={releaseDate}
        runtime={runtime}
        backdropPath={backdropPath}
        genres={genres}
      />
    </main>
  )
}
