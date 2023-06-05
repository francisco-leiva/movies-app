import Image from 'next/image';

export default function MovieCards({ image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='h-min'>
      <div>
        <Image
          src={`${URL_IMAGE + image}`}
          alt={`Poster ${title}`}
          width='176'
          height='288'
          className='w-auto h-auto'
        />
      </div>

      <h2>{title}</h2>
    </div>
  );
}
