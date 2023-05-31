import Image from 'next/image';
import { getUpcomingMovies } from '@/api/api';

export const UpcomingMovies = async () => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
  const upcomingMovies = await getUpcomingMovies();

  return (
    <section>
      {upcomingMovies.map((movie) => {
        return (
          <div className='h-min' key={movie.id}>
            <div className='w-40 h-60'>
              <Image
                src={`${URL_IMAGE + movie.poster_path}`}
                alt={`Poster ${movie.title}`}
                width='160'
                height='240'
                className='w-full h-full'
              />
            </div>

            <h2>{movie.title}</h2>
          </div>
        );
      })}
    </section>
  );
};
