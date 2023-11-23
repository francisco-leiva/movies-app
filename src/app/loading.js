export default function Loading() {
  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-50 bg-black bg-opacity-60 flex justify-center items-center'>
      <span className='w-12 h-12 border-[5px] border-solid border-white border-b-transparent rounded-full animate-spin'></span>
    </div>
  )
}
