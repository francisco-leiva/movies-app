'use client'

export default function NoResults() {
  return (
    <>
      <div className='grid place-items-center'>
        <h3 className='text-2xl text-center'>
          Ups! No results found, try with another search.
        </h3>
      </div>
      <style jsx>{`
        div {
          height: calc(100vh - 11rem);
        }
      `}</style>
    </>
  )
}
