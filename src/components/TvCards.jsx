import Image from 'next/image'
import Link from 'next/link'
import { URL_IMAGE, NO_IMAGE } from '@/utils/constants'

export default function TvCards({ id, image, title }) {
  // image can be null, in that case movieImage = NO_IMAGE, otherwise movieImage = full image url
  const movieImage = image ? URL_IMAGE + image : NO_IMAGE

  return (
    <div className='w-64 h-fit text-center'>
      <Link href={`/tv/${id}`}>
        <div className='h-96'>
          <Image
            src={movieImage}
            alt={`Poster ${title}`}
            width={500}
            height={500}
            priority={true}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        <h2 className='text-xl'>{title}</h2>
      </Link>
    </div>
  )
}
