import { getTvShowDetails } from '@/api/api'
import TvShowDetails from '@/components/TvShowDetails'

export default async function SeriesDetailsPage({ params }) {
  const { id } = params
  const { title, poster, tagline, description, releaseDate, backdrop, genres } =
    await getTvShowDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <TvShowDetails
        title={title}
        poster={poster}
        tagline={tagline}
        description={description}
        releaseDate={releaseDate}
        backdrop={backdrop}
        genres={genres}
      />
    </main>
  )
}
