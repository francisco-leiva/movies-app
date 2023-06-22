'use client';

import Image from 'next/image';

export default function MoviesDetails({
  title,
  poster,
  tagline,
  description,
  releaseDate,
  runtime,
  background,
  genres,
}) {
  // URLs for images
  const URL_POSTER = 'https://image.tmdb.org/t/p/w500';
  const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
  // get images
  const backgroundImage = URL_BACKGROUND + background;
  const posterImage = URL_POSTER + poster;

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

  // get genres names and join them
  const genresNames = genres.map((genre) => genre.name).join(', ');

  return (
    <section>
      <div className='relative max-w-6xl w-full px-2 py-4 flex gap-4 md:mx-auto'>
        <Image
          src={posterImage}
          alt={`Poster ${title}`}
          width={500}
          height={500}
          className='w-80 h-[30rem] rounded-lg'
        />

        <div className='text-white'>
          <h2 className='my-4 font-bold text-4xl movieTitle'>{title}</h2>

          <div className='mb-4 flex gap-2 text-xl'>
            <span>{fullReleaseDate}</span>

            <span>{genresNames}</span>

            <span>{formattedRuntime}</span>
          </div>

          <p className='mb-4 italic font-semibold text-xl opacity-60'>
            {tagline}
          </p>

          <div className='w-4/5'>
            <h3 className='font-bold text-2xl mb-2'>Overview</h3>
            <p className='text-xl'>{description}</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
        }

        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${backgroundImage}');
          background-size: cover;
          filter: brightness(20%);
        }

        .movieTitle::after {
          content: '(${year})';
          margin-left: 0.5rem;
          font-weight: 400;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
