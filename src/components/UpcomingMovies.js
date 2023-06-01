import { getUpcomingMovies } from '@/api/api';
import MovieCards from './MovieCards';

export const UpcomingMovies = async () => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
  const upcomingMovies = await getUpcomingMovies();

  return (
    <section>
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
