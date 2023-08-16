import Image from 'next/image'
import Link from 'next/link'
import { URL_IMAGE, URL_NO_IMAGE } from '@/utils/constants'

export default function MovieCards({ id, image, title }) {
  // full image url
  const movieImage = URL_IMAGE + image

  return (
    <div className='h-fit text-center'>
      <Link href={`/movie/${id}`}>
        <div>
          <Image
            src={image !== null ? movieImage : URL_NO_IMAGE}
            alt={`Poster ${title}`}
            width='288'
            height='432'
            className='w-80 mx-auto rounded'
          />
        </div>

        <h2 className='text-xl'>{title}</h2>
      </Link>
    </div>
  )
}
