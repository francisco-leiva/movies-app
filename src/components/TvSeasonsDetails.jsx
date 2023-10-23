import Image from 'next/image'
import { URL_IMAGE, IMAGE_NOT_FOUND } from '@/utils/constants'

export default function TvSeasonsDetails({ seasons }) {
  return (
    <>
      {seasons.map((season) => {
        // extract all properties of each season
        const {
          air_date: date,
          episode_count: episodeCount,
          id,
          name,
          overview,
          poster_path: poster,
        } = season

        // example of date: '2023-05-31'
        const [year] = date.split('-')

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
            className='flex flex-col gap-2 sm:flex-row sm:gap-0'
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

            <div className='max-w-2xl w-full sm:p-2 sm:pl-4 sm:border sm:border-[rgb(227,227,227)] sm:rounded-r-lg sm:shadow-md'>
              <h3 className='font-bold text-2xl text-center sm:text-left'>
                {name}
              </h3>

              <ul className='flex gap-1 text-lg font-semibold justify-center sm:justify-start'>
                <li>{year}</li>
                <li>&#x2022; {episodes}</li>
              </ul>

              <p className='mt-1 text-lg text-center sm:text-start'>
                {overview || 'No overview'}
              </p>
            </div>
          </article>
        )
      })}
    </>
  )
}
