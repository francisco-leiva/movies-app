'use client';
import { getMovieDetails } from '@/api/api';
import Image from 'next/image';

export default async function MovieDetails({ params }) {
  const { id } = params;
  const {
    title,
    poster,
    description,
    releaseDate,
    runtime,
    background,
    genres,
  } = await getMovieDetails(id);

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
    <>
      <main>
        <section className='max-w-4xl w-full px-2 pt-32 pb-8 sm:px-0 md:mx-auto'>
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
        </section>
      </main>

      <style jsx global>{`
        main {
          background-image: url('${URL_BACKGROUND + background}');
        }
      `}</style>
    </>
  );
}
