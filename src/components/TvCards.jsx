import Image from 'next/image'
import Link from 'next/link'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function TvCards({ id, image, title }) {
  // if image is not null, full image url
  // if image is null, image not found
  const tvImage = image ? URL_IMAGE + image : IMAGE_NOT_FOUND

  return (
    <div className='w-64 h-fit text-center'>
      <Link href={`/tv/${id}`}>
        <div className='h-96'>
          <Image
            src={tvImage}
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
