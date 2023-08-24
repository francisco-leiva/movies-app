import Image from 'next/image'
import Link from 'next/link'
import { URL_IMAGE, URL_NO_IMAGE } from '@/utils/constants'

export default function MovieCards({ id, image, title }) {
  // full image url
  const movieImage = URL_IMAGE + image

  return (
    <div className='w-64 h-fit justify-self-center text-center'>
      <Link href={`/movie/${id}`}>
        <div className='h-96'>
          <Image
            src={image !== null ? movieImage : URL_NO_IMAGE}
            alt={`Poster ${title}`}
            width='500'
            height='500'
            priority={true}
            className='w-full h-full object-cover rounded'
          />
        </div>

        <h2 className='text-xl'>{title}</h2>
      </Link>
    </div>
  )
}
