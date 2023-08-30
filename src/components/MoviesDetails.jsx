import Image from 'next/image'
import { URL_IMAGE, URL_BACKDROP, NO_IMAGE } from '@/utils/constants'

export default function MoviesDetails({
  title,
  poster,
  tagline,
  description,
  releaseDate,
  runtime,
  backdrop,
  genres,
}) {
  // full url of images
  const backdropImage = backdrop ? URL_BACKDROP + backdrop : NO_IMAGE
  const posterImage = poster ? URL_IMAGE + poster : NO_IMAGE

  // format date
  const date = new Date(releaseDate)
  const year = date.getFullYear()
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  const fullReleaseDate = date.toLocaleString('en-GB', options)

  // format hour
  // function to convert minutes to hours and minutes
  const timeConvert = (min) => {
    const hours = min / 60
    const roundedHours = Math.floor(hours)
    const minutes = (hours - roundedHours) * 60
    const roundedMinutes = Math.round(minutes)
    return `${roundedHours}h ${roundedMinutes}m`
  }
  const formattedRuntime = timeConvert(runtime)

  // get genres names and join them
  const genresNames = genres.map((genre) => genre.name).join(', ')

  return (
    <section>
      <div className='w-full h-72 md:h-[30rem]'>
        <Image
          src={backdropImage}
          alt={`Banner of ${title}`}
          width={500}
          height={500}
          priority={true}
          className='w-full h-full object-cover brightness-[.35] md:object-fill'
        />
      </div>

      <article className='relative max-w-6xl w-full px-2 py-6 flex flex-col items-center gap-4 sm:py-8 md:mx-auto md:flex-row'>
        <div className='absolute top-[-9rem] z-[2] shadow-lg md:static'>
          <Image
            src={posterImage}
            alt={`Poster ${title}`}
            width={500}
            height={500}
            className='w-56 h-[21rem] rounded-lg sm:w-80 sm:h-[30rem]'
          />
        </div>

        <div className='mt-[10.5rem] sm:mt-[19rem] md:mt-0 md:self-start'>
          <div className='my-4 text-3xl flex justify-center items-center sm:text-4xl md:justify-start'>
            <h2 className='font-bold'>{title}</h2>

            <span className='ml-2 font-normal opacity-60'>({year})</span>
          </div>

          <div className='mb-4 flex flex-col flex-wrap gap-2 text-xl sm:flex-row sm:justify-center md:justify-normal'>
            <span>&#x2022; {fullReleaseDate}</span>

            <span>&#x2022; {genresNames}</span>

            <span>&#x2022; {formattedRuntime}</span>
          </div>

          <p className='mb-4 italic font-semibold text-xl opacity-60 sm:text-center md:text-left'>
            {tagline}
          </p>

          <div>
            <h3 className='mb-2 font-bold text-2xl text-center md:text-left'>
              Overview
            </h3>

            <p className='max-w-xl text-xl'>{description}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
