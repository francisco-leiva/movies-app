import SeasonDetails from './SeasonDetails'

export default function Seasons({ seasons }) {
  return (
    <section className='max-w-5xl mx-3 px-2 pb-4 bg-slate-100 lg:mx-auto'>
      <h2 className='py-4 font-bold text-3xl uppercase'>Seasons</h2>

      <div className='flex flex-col gap-6'>
        {seasons.map(
          ({
            air_date: airDate,
            episode_count: episodeCount,
            id,
            name,
            overview,
            poster_path: posterPath,
          }) => {
            return (
              <SeasonDetails
                key={id}
                airDate={airDate}
                episodeCount={episodeCount}
                name={name}
                overview={overview}
                posterPath={posterPath}
              />
            )
          }
        )}
      </div>
    </section>
  )
}
