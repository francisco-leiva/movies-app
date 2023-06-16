'use client';

import Image from 'next/image';

export default function MovieDetails({
  title,
  poster,
  description,
  releaseDate,
  runtime,
  background,
  genres,
}) {
  // URLs for images
  const URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
  const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original/';

  // format date
  const date = new Date(releaseDate);
  const year = date.getFullYear();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const fullReleaseDate = date.toLocaleString('en-GB', options);

  // format hour
  // function to convert minutes to hours and minutes
  const timeConvert = (min) => {
    const minOfMovie = min;
    const hours = minOfMovie / 60;
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);
    return `${roundedHours}h ${roundedMinutes}m`;
  };
  const formattedRuntime = timeConvert(runtime);

  return (
    <section className='max-w-4xl w-full px-2 pt-36 pb-8 sm:px-0 md:mx-auto'>
      <div>
        <Image
          src={`${URL_POSTER + poster}`}
          alt={title}
          width={500}
          height={500}
          className='w-80 h-[27rem]'
        />

        <div>
          <h2>{title}</h2>
          <span>{year}</span>
        </div>

        <div>
          <span>{fullReleaseDate}</span>
          <span>
            {genres.map((genre) => {
              return <span key={genre.id}>{genre.name}</span>;
            })}
          </span>

          <span>{formattedRuntime}</span>
        </div>

        <div>
          <p>{description}</p>
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
        }

        section::before {
          content: '';
          position: absolute;
          background-image: url('${URL_BACKGROUND + background}');
          background-repeat: no-repeat;
          background-size: cover;
          top: 9rem;
          left: 0;
          right: 0;
          bottom: 2rem;
          opacity: 0.75;
        }
      `}</style>
    </section>
  );
}
