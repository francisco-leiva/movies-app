import { getTvShowDetails } from '@/api/api'
import TvShowDetails from '@/components/TvShowDetails'

export default async function SeriesDetailsPage({ params }) {
  const { id } = params
  const details = await getTvShowDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <TvShowDetails details={details} />
    </main>
  )
}
