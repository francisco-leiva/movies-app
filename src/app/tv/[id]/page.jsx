import { getTvShowDetails } from '@/api/api'
import TvShowDetails from '@/components/TvShowDetails'

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
        seasons={seasons}
      />
    </main>
  )
}
