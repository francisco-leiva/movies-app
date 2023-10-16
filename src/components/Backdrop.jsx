'use client'

import { URL_BACKDROP, NO_IMAGE } from '@/utils/constants'

export default function Backdrop({ backdropImage }) {
  // if backdrop image is not null, full image url
  // if backdrop image is null, image not found
  const backdrop = backdropImage
    ? `url(${URL_BACKDROP + backdropImage})`
    : `url(${NO_IMAGE})`

  return (
    <>
      <div className='backdrop relative w-full h-72 sm:h-80 md:h-[30rem] lg:h-[40rem] lg:mx-auto after:absolute after:bottom-0 after:z-[1] after:w-full after:h-[20%] after:bg-backdrop'></div>

      <style jsx>{`
        .backdrop {
          background-image: ${backdrop};
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  )
}
