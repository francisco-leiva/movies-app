import { searchShows } from '@/api/api'
import MovieCards from '@/components/MovieCards'
import TvCards from '@/components/TvCards'
import NoResults from '@/components/NoResults'

export default async function Search({ params }) {
  const { query } = params
  const searchResults = await searchShows(query)

  return (
    <main className='pt-24 pb-4'>
      <section className='max-w-4xl min-h-[calc(100vh-10rem)] w-full px-2 grid grid-cols-cards justify-items-center gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        {!searchResults.length ? (
          <NoResults />
        ) : (
          searchResults.map(({ id, title, posterPath, type }) => {
            if (type === 'movie') {
              return (
                <MovieCards key={id} id={id} image={posterPath} title={title} />
              )
            } else {
              return (
                <TvCards key={id} id={id} image={posterPath} title={title} />
              )
            }
          })
        )}
      </section>
    </main>
  )
}
