import Image from 'next/image';

export default function MovieCards({ image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='h-min'>
      <div className='w-40 h-60'>
        <Image
          src={`${URL_IMAGE + image}`}
          alt={`Poster ${title}`}
          width='160'
          height='240'
          className='w-full h-full'
        />
      </div>

      <h2>{title}</h2>
    </div>
  );
}
