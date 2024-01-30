import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function SeasonDetails({
  airDate,
  episodeCount,
  name,
  overview,
  posterPath,
}) {
  // example of date: '2023-05-31'
  const year = airDate ? new Date(airDate).getFullYear() : 'N/A'

  // '6 episodes' or '1 episode'
  const episodes = `${episodeCount} ${
    episodeCount > 1 ? 'episodes' : 'episode'
  }`

  // if poster is not null, full image url
  // if poster is null, no image url
  const seasonPoster = posterPath ? URL_IMAGE + posterPath : IMAGE_NOT_FOUND

  return (
    <article className='flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-center'>
      <div className='w-40 h-60 flex-none self-center sm:self-start'>
        <Image
          src={seasonPoster}
          alt={name}
          width={500}
          height={750}
          className='w-full h-full rounded-lg sm:rounded-r-none'
        />
      </div>

      <div className='max-w-2xl w-full sm:p-2 sm:pl-4 sm:rounded-r-lg sm:shadow-lg'>
        <h3 className='font-bold text-2xl text-center sm:text-left'>{name}</h3>

        <ul className='text-lg font-semibold text-center sm:text-start'>
          <li className='inline'>{year}</li>
          <li className='inline ml-1'>&#x2022; {episodes}</li>
        </ul>

        <p className='px-4 py-3 text-lg sm:pl-0 sm:py-0'>
          {overview || 'No overview'}
        </p>
      </div>
    </article>
  )
}
