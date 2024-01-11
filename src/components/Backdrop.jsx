'use client'

import { URL_BACKDROP } from '@/utils/constants'

export default function Backdrop({ backdropImage }) {
  // if backdrop image is not null, full image url
  // if backdrop image is null, image not found
  const backdrop = backdropImage
    ? `url(${URL_BACKDROP + backdropImage})`
    : '#ffffff'

  return (
    <>
      <div className='backdrop fixed top-20 w-full h-[100svh] z-[-1] brightness-50'></div>

      <style jsx>{`
        .backdrop {
          background: ${backdrop} no-repeat center;
          background-size: cover;
        }
      `}</style>
    </>
  )
}
