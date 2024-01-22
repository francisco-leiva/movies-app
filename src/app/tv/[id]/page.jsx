import { getTvShowDetails, getTvShowCast } from '@/api/api'
import TvShowDetails from './components/TvShowDetails'
import Seasons from './components/Seasons'
import Cast from '@/components/Cast'

export default async function SeriesDetailsPage({ params }) {
  const { id } = params
  const {
    title,
    posterPath,
    tagline,
    description,
    releaseDate,
    backdropPath,
    genres,
    seasons,
  } = await getTvShowDetails(id)
  const tvShowCast = await getTvShowCast(id)

  return (
    <main className='pt-20 pb-4'>
      <TvShowDetails
        title={title}
        posterPath={posterPath}
        tagline={tagline}
        description={description}
        releaseDate={releaseDate}
        backdropPath={backdropPath}
        genres={genres}
      />

      <Cast cast={tvShowCast} />

      <Seasons seasons={seasons} />
    </main>
  )
}
