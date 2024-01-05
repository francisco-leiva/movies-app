import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'
import Backdrop from './Backdrop'
import TvSeasonsDetails from './TvSeasonsDetails'

export default function TvShowDetails({ details }) {
  const {
    title,
    poster,
    tagline,
    description,
    releaseDate,
    backdrop,
    genres,
    seasons,
  } = details

  // if poster is not null, full image url
  // if poster is null, no image url
  const posterImage = poster ? URL_IMAGE + poster : IMAGE_NOT_FOUND

  // example of releaseDate: '2023-05-31'
  const year = new Date(releaseDate).getFullYear()

  // get genres names and join them in a string
  const genresNames = genres.map((genre) => genre.name).join(', ')

  return (
    <section>
      <Backdrop backdropImage={backdrop} />

      <article className='relative z-[2] max-w-5xl w-full px-2 py-6 flex flex-col items-center gap-4 md:mx-auto md:p-0 md:top-[-3rem] md:flex-row'>
        <div className='absolute top-[-9rem] w-56 h-[21rem] z-[2] shadow-lg sm:w-80 sm:h-[30rem] md:static md:flex-none'>
          <Image
            src={posterImage}
            alt={`Poster ${title}`}
            width={500}
            height={500}
            className='w-full h-full rounded-lg'
          />
        </div>

        <section className='mt-[10.5rem] sm:mt-[19.5rem] md:mt-0 md:self-start'>
          <h2 className='my-4 text-3xl font-bold text-center sm:text-4xl md:text-left'>
            {title} <span className='font-normal opacity-60'>({year})</span>
          </h2>

          <ul className='mb-4 flex justify-center flex-wrap gap-2 text-xl md:justify-normal'>
            <li>{genresNames}</li>
          </ul>

          <p className='mb-4 italic font-semibold text-xl text-center opacity-60 md:text-left'>
            {tagline}
          </p>

          <div>
            <h3 className='mb-2 font-bold text-2xl text-center md:text-left'>
              Overview
            </h3>

            <p className='max-w-[40rem] text-xl'>{description}</p>
          </div>
        </section>
      </article>

      <section className='max-w-5xl w-full px-2 py-6 flex flex-col gap-6 md:p-0 md:pb-4 md:mx-auto'>
        <h2 className='font-bold text-3xl text-center sm:text-start'>
          Seasons
        </h2>

        <TvSeasonsDetails seasons={seasons} />
      </section>
    </section>
  )
}
