import { getUpcomingMovies } from '@/api/api';
import MovieCards from './MovieCards';

export const MainSection = async () => {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <section className='max-w-4xl w-full px-2 pt-32 pb-8 grid grid-cols-cards gap-x-2 gap-y-4 sm:px-0 md:mx-auto'>
      {upcomingMovies.map((movie) => {
        return (
          <MovieCards
            key={movie.id}
            className={'h-fit text-center'}
            image={movie.poster_path}
            title={movie.title}
          />
        );
      })}
    </section>
  );
};
