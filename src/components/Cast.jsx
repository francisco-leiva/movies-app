import CastCard from './CastCard'

export default function Cast({ cast }) {
  return (
    <section className='max-w-5xl mx-3 px-2 bg-slate-100 lg:mx-auto'>
      <h2 className='py-4 text-3xl font-bold uppercase'>Actors</h2>

      <div className='flex gap-6 flex-nowrap overflow-x-auto overflow-y-hidden lg:mx-3'>
        {cast.map(({ id, name, character, profilePath }) => {
          return (
            <CastCard
              key={id}
              name={name}
              character={character}
              profilePath={profilePath}
            />
          )
        })}
      </div>
    </section>
  )
}
