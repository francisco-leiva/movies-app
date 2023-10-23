import Image from 'next/image'
import Backdrop from './Backdrop'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function MovieDetails({ details }) {
  const {
    title,
    poster,
    tagline,
    description,
    releaseDate,
    runtime,
    backdrop,
    genres,
  } = details
  // if poster is not null, full image url
  // if poster is null, no image url
  const posterImage = poster ? URL_IMAGE + poster : IMAGE_NOT_FOUND

  // example of releaseDate: '2023-05-31'
  // split release date by hyphens
  const date = releaseDate.split('-')
  const year = date[0]
  const fullReleaseDate = date.reverse().join('/')

  // format hour
  // function to convert minutes into hours and minutes
  const timeConvert = (min) => {
    const hours = min / 60
    const roundedHours = Math.floor(hours)
    const minutes = (hours - roundedHours) * 60
    const roundedMinutes = Math.round(minutes)
    return `${roundedHours}h ${roundedMinutes}m`
  }
  const formattedRuntime = timeConvert(runtime)

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
            <li>{fullReleaseDate}</li>

            <li>&#x2022; {genresNames}</li>

            <li>&#x2022; {formattedRuntime}</li>
          </ul>

          <p className='mb-4 italic font-semibold text-xl text-center opacity-60 md:text-left'>
            {tagline}
          </p>

          <div>
            <h3 className='mb-2 font-bold text-2xl text-center md:text-left'>
              Overview
            </h3>

            <p className='max-w-xl text-xl'>{description}</p>
          </div>
        </section>
      </article>
    </section>
  )
}
