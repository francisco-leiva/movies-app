import { getMovieDetails } from '@/api/api';
import MoviesDetails from '@/components/MoviesDetails';

export default async function DetailsPage({ params }) {
  const { id } = params;
  const {
    title,
    poster,
    tagline,
    description,
    releaseDate,
    runtime,
    background,
    genres,
  } = await getMovieDetails(id);

  return (
    <main className='pt-32 pb-4'>
      <MoviesDetails
        title={title}
        poster={poster}
        tagline={tagline}
        description={description}
        releaseDate={releaseDate}
        runtime={runtime}
        background={background}
        genres={genres}
      />
    </main>
  );
}
