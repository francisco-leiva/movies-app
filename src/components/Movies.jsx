import MovieCards from './MovieCards';

export default function Movies({ movieList }) {
  return (
    <>
      {movieList.map((movie) => {
        return (
          <MovieCards
            key={movie.id}
            id={movie.id}
            image={movie.poster}
            title={movie.title}
          />
        );
      })}
    </>
  );
}
