import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function Cast({ cast }) {
  return (
    <section className='max-w-5xl mx-3 px-2 bg-slate-100 lg:mx-auto'>
      <h2 className='py-4 text-3xl font-bold'>Actors</h2>

      <div className='flex flex-wrap gap-3'>
        {cast.map(({ id, name, character, profilePath }) => {
          const img = profilePath ? URL_IMAGE + profilePath : IMAGE_NOT_FOUND

          return (
            <div key={id} className='w-36'>
              <Image
                src={img}
                alt={name}
                width={100}
                height={150}
                className='w-36 h-52'
              />

              <div className='p-2 bg-slate-950 bg-opacity-10 text-center'>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <span className='text-sm'>{character}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
