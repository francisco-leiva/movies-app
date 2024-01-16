import Image from 'next/image'
import Backdrop from './Backdrop'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function MovieDetails({
  title,
  posterPath,
  tagline,
  description,
  releaseDate,
  runtime,
  backdropPath,
  genres,
}) {
  // if poster is not null, full image url
  // if poster is null, no image url
  const posterImage = posterPath ? URL_IMAGE + posterPath : IMAGE_NOT_FOUND

  // example of releaseDate: '2023-05-31'
  const date = new Date(releaseDate)
  const year = date.getFullYear()
  const fullReleaseDate = date.toLocaleDateString('en-US')

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

  return (
    <>
      <Backdrop backdropImage={backdropPath} />

      <section className='max-w-5xl mt-8 mx-3 lg:mx-auto'>
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

          <article className='text-white md:self-start'>
            <div className='my-4 text-3xl text-center sm:text-4xl md:text-left'>
              <h2 className='inline font-bold'>{title}</h2>

              <span className='ml-2 font-normal opacity-60'>({year})</span>
            </div>

            <h3 className='my-4 italic font-semibold text-xl text-center opacity-70 md:text-left'>
              {tagline}
            </h3>

            <ul className='my-4 px-3 flex flex-col gap-2 text-xl md:px-0'>
              <li>Release date: {fullReleaseDate}</li>

              <li>Duration: {formattedRuntime}</li>

              <ul className='flex flex-wrap gap-2'>
                {genres.map(({ id, name }) => {
                  return (
                    <li key={id} className='p-1 bg-[#3365dd] rounded'>
                      {name}
                    </li>
                  )
                })}
              </ul>
            </ul>

            <div>
              <h4 className='mb-2 font-bold text-2xl text-center md:text-left'>
                Overview
              </h4>

              <p className='max-w-xl text-xl text-pretty px-3 md:px-0'>
                {description}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
