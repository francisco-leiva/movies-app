import Movies from '@/components/Movies';
import { getUpcomingMovies } from '@/api/api';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <main>
      <section className='max-w-4xl w-full px-2 pt-32 pb-8 grid grid-cols-cards gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <Movies movieList={upcomingMovies} />
      </section>
    </main>
  );
}
