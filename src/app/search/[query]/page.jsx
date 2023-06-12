import Movies from '@/components/Movies';
import { searchMovies } from '@/api/api';

export default async function Search({ params }) {
  const { query } = params;
  const search = await searchMovies(query);

  return (
    <main>
      <section className='max-w-4xl w-full px-2 pt-32 pb-8 grid grid-cols-cards gap-x-4 gap-y-4 sm:px-0 md:mx-auto'>
        <Movies movieList={search} />
      </section>
    </main>
  );
}
