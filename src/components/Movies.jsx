import MovieCards from './MovieCards';

export default function Movies({ movieList }) {
  return (
    <>
      {movieList.map((movie) => {
        return (
          <MovieCards
            key={movie.id}
            className={'h-fit text-center'}
            image={movie.poster}
            title={movie.title}
          />
        );
      })}
    </>
  );
}
