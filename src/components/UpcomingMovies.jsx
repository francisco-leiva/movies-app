import { getUpcomingMovies } from '@/api/api';
import MovieCards from './MovieCards';

export const UpcomingMovies = async () => {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <section className='grid grid-cols-mobile gap-2 mx-2'>
      {upcomingMovies.map((movie) => {
        return (
          <MovieCards
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
          />
        );
      })}
    </section>
  );
};
