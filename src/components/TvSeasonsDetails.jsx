import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function TvSeasonsDetails({ seasons }) {
  return (
    <>
      {seasons.map(
        ({
          air_date: date,
          episode_count: episodeCount,
          id,
          name,
          overview,
          poster_path: poster,
        }) => {
          // example of date: '2023-05-31'
          const year = date ? new Date(date).getFullYear() : 'N/A'

          // form the text '6 episodes' or '1 episode'
          const episodes = `${episodeCount} ${
            episodeCount > 1 ? 'episodes' : 'episode'
          }`

          // if poster is not null, full image url
          // if poster is null, no image url
          const seasonPoster = poster ? URL_IMAGE + poster : IMAGE_NOT_FOUND

          return (
            <article
              key={id}
              className='flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-center'
            >
              <div className='w-40 h-60 flex-none self-center sm:self-start'>
                <Image
                  src={seasonPoster}
                  alt={name}
                  width={500}
                  height={500}
                  className='w-full h-full rounded-lg sm:rounded-r-none'
                />
              </div>

              <div className='max-w-2xl w-full sm:p-2 sm:pl-4 sm:rounded-r-lg sm:shadow-lg'>
                <h3 className='font-bold text-2xl text-center sm:text-left'>
                  {name}
                </h3>

                <ul className='flex gap-1 text-lg font-semibold justify-center sm:justify-start'>
                  <li>{year}</li>
                  <li>&#x2022; {episodes}</li>
                </ul>

                <p className='px-4 py-3 text-lg sm:pl-0 sm:py-0'>
                  {overview || 'No overview'}
                </p>
              </div>
            </article>
          )
        }
      )}
    </>
  )
}
