import Image from 'next/image';
import { getMovieDetails } from '@/api/api';

export default async function DetailsPage({ params }) {
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

  // get genres names and join them
  const genresNames = genres.map((genre) => genre.name).join(', ');

  return (
    <main>
      <section className='max-w-4xl w-full px-2 pt-32 pb-8 sm:px-0 md:mx-auto'>
        <div className='relative z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-backdrop'>
          <Image
            src={`${URL_BACKGROUND + background}`}
            alt={`Backdrop ${title}`}
            width={896}
            height={400}
          />
        </div>

        <div className='flex gap-4'>
          <Image
            src={`${URL_POSTER + poster}`}
            alt={`Poster ${title}`}
            width={500}
            height={500}
            className='w-full h-[27rem]'
          />

          <div>
            <div className='flex gap-1 text-4xl'>
              <h2 className='font-bold'>{title}</h2>
              <span className='font-normal opacity-60'>({year})</span>
            </div>

            <div>
              <span>{fullReleaseDate}</span>

              <span>{genresNames}</span>

              <span>{formattedRuntime}</span>
            </div>

            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
