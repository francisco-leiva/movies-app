import Image from 'next/image'
import Link from 'next/link'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function MovieCards({ id, image, title, index }) {
  // if image is not null, full image url
  // if image is null, image not found
  const movieImage = image ? URL_IMAGE + image : IMAGE_NOT_FOUND

  return (
    <div className='w-64 h-fit text-center'>
      <Link href={`/movies/${id}`} aria-label={`Learn more about ${title}`}>
        <div className='h-96'>
          <Image
            src={movieImage}
            alt={`Poster ${title}`}
            width={500}
            height={750}
            loading={index < 6 ? 'eager' : 'lazy'}
            className='h-full object-cover rounded-lg'
          />
        </div>

        <h2 className='text-xl'>{title}</h2>
      </Link>
    </div>
  )
}
