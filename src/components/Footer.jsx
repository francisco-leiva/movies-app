import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full h-16 flex bg-[#1B264F] text-white'>
      <div className='max-w-4xl w-full mx-4 flex justify-between items-center text-xl lg:mx-auto'>
        <span>
          <Link href={'https://github.com/francisco-leiva'} target='_blank'>
          Francisco Leiva®
          </Link>
        </span>

        <span>
          <Link
            href={'https://www.themoviedb.org/'}
            target='_blank'
            className='font-bold'
          >
            TMDB API
          </Link>
        </span>
      </div>
    </footer>
  );
}
