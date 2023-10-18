import MovieCards from './MovieCards'
import TvCards from './TvCards'

export default function ListOfShows({ list }) {
  return (
    <>
      {list.map((element) => {
        if (element.type === 'movie') {
          return (
            <MovieCards
              key={element.id}
              id={element.id}
              image={element.poster}
              title={element.title}
            />
          )
        } else {
          return (
            <TvCards
              key={element.id}
              id={element.id}
              image={element.poster}
              title={element.title}
            />
          )
        }
      })}
    </>
  )
}
