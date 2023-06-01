import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <span>
        Made by <strong>Francisco Leiva</strong>
      </span>

      <span>
        This product uses the{' '}
        <Link
          href={'https://www.themoviedb.org/'}
          target='_blank'
          className='font-bold'
        >
          TMDB API
        </Link>{' '}
        but is not endorsed or certified by TMDB.
      </span>
    </footer>
  );
}
