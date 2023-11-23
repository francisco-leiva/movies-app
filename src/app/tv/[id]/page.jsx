import { Suspense } from 'react'
import { getTvShowDetails } from '@/api/api'
import TvShowDetails from '@/components/TvShowDetails'
import Loading from '@/app/loading'

export default async function SeriesDetailsPage({ params }) {
  const { id } = params
  const details = await getTvShowDetails(id)

  return (
    <main className='pt-20 pb-4'>
      <Suspense fallback={<Loading />}>
        <TvShowDetails details={details} />
      </Suspense>
    </main>
  )
}
