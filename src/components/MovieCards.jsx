import Image from 'next/image'
import Link from 'next/link'

export default function MovieCards({ id, image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500' + image
  const URL_NO_IMAGE =
    'https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg'

  return (
    <div className='h-fit text-center'>
      <Link href={`/movie/${id}`}>
        <div>
          <Image
            src={image !== null ? URL_IMAGE : URL_NO_IMAGE}
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
