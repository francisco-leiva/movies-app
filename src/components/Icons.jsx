export function SearchIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      stroke='url(#grad)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      <defs>
        <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='rgb(134,239,172)' />
          <stop offset='50%' stopColor='rgb(59,130,246)' />
          <stop offset='100%' stopColor='rgb(147,51,234)' />
        </linearGradient>
      </defs>
      <path stroke='none' d='M0 0h24v24H0z'></path>
      <path d='M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6'></path>
    </svg>
  )
}
