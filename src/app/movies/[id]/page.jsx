import { getMovieDetails, getMovieCast } from '@/api/api'
import MovieDetails from '@/components/MovieDetails'
import Cast from '@/components/Cast'

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
  const movieCast = await getMovieCast(id)

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

      <Cast cast={movieCast} />
    </main>
  )
}
