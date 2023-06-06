import { getUpcomingMovies } from '@/api/api';
import MovieCards from './MovieCards';

export const MainSection = async () => {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <section className='max-w-4xl w-full mx-2 pt-32 pb-8 flex flex-wrap gap-x-2 gap-y-4 md:mx-auto'>
      {upcomingMovies.map((movie) => {
        return (
          <MovieCards
            key={movie.id}
            className={'h-fit flex-grow basis-72 text-center'}
            image={movie.poster_path}
            title={movie.title}
          />
        );
      })}
    </section>
  );
};
