import { getMovieDetails } from '@/api/api';
import MovieDetails from '@/components/MovieDetails';

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

  return (
    <main>
      <MovieDetails
        title={title}
        poster={poster}
        description={description}
        releaseDate={releaseDate}
        runtime={runtime}
        background={background}
        genres={genres}
      />
    </main>
  );
}
