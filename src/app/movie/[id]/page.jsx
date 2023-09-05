import { getMovieDetails } from '@/api/api'
import MoviesDetails from '@/components/MoviesDetails'

export default async function DetailsPage({ params }) {
  const { id } = params
  const {
    title,
    poster,
    tagline,
    description,
    releaseDate,
    runtime,
    backdrop,
    genres,
  } = await getMovieDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <MoviesDetails
        title={title}
        poster={poster}
        tagline={tagline}
        description={description}
        releaseDate={releaseDate}
        runtime={runtime}
        backdrop={backdrop}
        genres={genres}
      />
    </main>
  )
}
