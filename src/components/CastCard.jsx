import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function CastCard({ name, character, profilePath }) {
  const img = profilePath ? URL_IMAGE + profilePath : IMAGE_NOT_FOUND

  return (
    <div className='w-36 flex-[0_0_auto]'>
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
}
