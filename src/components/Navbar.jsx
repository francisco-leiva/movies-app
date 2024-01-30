'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAVBAR_LINKS } from '@/utils/constants'
import { HamburgerMenuIcon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggleNav = () => setOpen(!open)

  return (
    <div className='flex items-center gap-2 sm:gap-5'>
      <button
        type='button'
        aria-label='Open navigation menu'
        className='h-full sm:hidden'
        onClick={handleToggleNav}
      >
        <HamburgerMenuIcon />
      </button>

      <h1 className='mainTitle h-10 text-3xl tracking-[.25rem] bg-titleGradient'>
        <Link href={'/'} aria-label='Go home'>
          CineFlix
        </Link>
      </h1>

      <nav
        className={`${
          open ? 'flex' : 'hidden'
        } absolute w-screen h-screen top-20 left-0 z-50 justify-center bg-blue-950 sm:inline sm:static sm:w-fit sm:h-fit`}
      >
        <ul className='mt-2 flex flex-col items-center gap-5 text-white text-2xl sm:flex-row sm:text-xl sm:m-0'>
          {NAVBAR_LINKS.map((link) => {
            return (
              <li key={link.name} onClick={() => setOpen(false)}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
