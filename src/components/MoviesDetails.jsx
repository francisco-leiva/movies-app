'use client'

import Image from 'next/image'
import { URL_POSTER, URL_BACKGROUND } from '@/utils/constants'

export default function MoviesDetails({
  title,
  poster,
  tagline,
  description,
  releaseDate,
  runtime,
  background,
  genres,
}) {
  // full url of images
  const backgroundImage = URL_BACKGROUND + background
  const posterImage = URL_POSTER + poster

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
      <div className='relative max-w-6xl w-full px-2 py-6 flex flex-col gap-4 sm:py-8 md:mx-auto md:flex-row'>
        <Image
          src={posterImage}
          alt={`Poster ${title}`}
          width={500}
          height={500}
          className='w-60 h-80 self-center rounded-lg sm:w-80 sm:h-[30rem]'
        />

        <div className='text-white'>
          <h2 className='my-4 font-bold text-4xl text-center md:text-left movieTitle'>
            {title}
          </h2>

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
            <p className='text-xl text-justify'>{description}</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
        }

        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${backgroundImage}');
          background-size: cover;
          filter: brightness(20%);
        }

        .movieTitle::after {
          content: '(${year})';
          margin-left: 0.5rem;
          font-weight: 400;
          opacity: 0.6;
        }
      `}</style>
    </section>
  )
}
