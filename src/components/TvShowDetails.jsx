import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'
import Backdrop from './Backdrop'
import SeasonDetails from './SeasonDetails'

export default function TvShowDetails({
  title,
  posterPath,
  tagline,
  description,
  releaseDate,
  backdropPath,
  genres,
  seasons,
}) {
  // if poster is not null, full image url
  // if poster is null, no image url
  const posterImage = posterPath ? URL_IMAGE + posterPath : IMAGE_NOT_FOUND

  // example of releaseDate: '2023-05-31'
  const year = new Date(releaseDate).getFullYear()

  return (
    <section>
      <Backdrop backdropImage={backdropPath} />

      <article className='max-w-5xl mt-8 mx-3 lg:mx-auto'>
        <div className='w-full px-2 py-6 bg-black bg-opacity-50 flex flex-col items-center gap-4 md:p-0 md:flex-row'>
          <div className='w-56 h-[21rem] shadow-lg sm:w-80 sm:h-[30rem] md:flex-none'>
            <Image
              src={posterImage}
              alt={`Poster ${title}`}
              width={500}
              height={500}
              className='w-full h-full rounded-lg md:rounded-none'
            />
          </div>

          <section className='text-white md:self-start'>
            <div className='my-4 text-3xl text-center sm:text-4xl md:text-left'>
              <h2 className='inline font-bold'>{title}</h2>

              <span className='ml-2 font-normal opacity-60'>({year})</span>
            </div>

            <h3 className='my-4 italic font-semibold text-xl text-center opacity-70 md:text-left'>
              {tagline}
            </h3>

            <ul className='my-4 px-3 flex flex-col gap-2 text-xl md:px-0'>
              <li className='flex flex-wrap gap-2'>
                {genres.map(({ id, name }) => {
                  return (
                    <span key={id} className='p-1 bg-[#3365dd] rounded'>
                      {name}
                    </span>
                  )
                })}
              </li>
            </ul>

            <div>
              <h4 className='mb-2 font-bold text-2xl text-center md:text-left'>
                Overview
              </h4>

              <p className='max-w-xl text-xl px-3 md:px-0'>{description}</p>
            </div>
          </section>
        </div>
      </article>

      <section className='max-w-5xl mx-3 pb-4 bg-[#F5F5FA] md:mx-auto'>
        <h2 className='py-4 font-bold text-3xl text-center text-black sm:pl-4 sm:text-start'>
          Seasons
        </h2>

        <div className='flex flex-col gap-6'>
          {seasons.map(
            ({
              air_date: airDate,
              episode_count: episodeCount,
              id,
              name,
              overview,
              poster_path: posterPath,
            }) => {
              return (
                <SeasonDetails
                  key={id}
                  airDate={airDate}
                  episodeCount={episodeCount}
                  name={name}
                  overview={overview}
                  posterPath={posterPath}
                />
              )
            }
          )}
        </div>
      </section>
    </section>
  )
}
