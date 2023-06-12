import Image from 'next/image';

export default function MovieCards({ className, image, title }) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className={className}>
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
    </div>
  );
}
