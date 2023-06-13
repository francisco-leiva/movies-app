import Image from 'next/image';
import Link from 'next/link';

export default function MovieCards({ id, image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='h-fit text-center'>
      <Link href={`/movie/${id}`}>
        <div>
          <Image
            src={`${URL_IMAGE + image}`}
            alt={`Poster ${title}`}
            width='500'
            height='500'
            className='w-80 mx-auto rounded lg:h-[27rem]'
          />
        </div>

        <h2 className='text-xl'>{title}</h2>
      </Link>
    </div>
  );
}
