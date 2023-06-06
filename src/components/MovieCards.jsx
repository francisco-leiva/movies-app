import Image from 'next/image';

export default function MovieCards({ className, image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className={className}>
      <div>
        <Image
          src={`${URL_IMAGE + image}`}
          alt={`Poster ${title}`}
          width='176'
          height='288'
          className='w-auto h-auto mx-auto'
        />
      </div>

      <h2 className='text-xl'>{title}</h2>
    </div>
  );
}
