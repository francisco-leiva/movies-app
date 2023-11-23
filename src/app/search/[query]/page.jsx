import { Suspense } from 'react'
import { searchShows } from '@/api/api'
import ListOfShows from '@/components/ListOfShows'
import NoResults from '@/components/NoResults'
import Loading from '@/app/loading'

export default async function Search({ params }) {
  const { query } = params
  const searchResults = await searchShows(query)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <Suspense fallback={<Loading />}>
          {searchResults.length ? (
            <ListOfShows list={searchResults} />
          ) : (
            <NoResults />
          )}
        </Suspense>
      </section>
    </main>
  )
}
