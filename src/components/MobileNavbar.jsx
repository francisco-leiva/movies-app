'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAVBAR_LINKS } from '@/utils/constants'
import { HamburgerMenuIcon } from './Icons'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  return (
    <div className='sm:hidden'>
      <button
        type='button'
        aria-label='Drop down navigation bar'
        className='h-full'
        onClick={handleOpen}
      >
        <HamburgerMenuIcon />
      </button>

      <nav
        className={`${
          open ? 'flex' : 'hidden'
        } absolute w-screen h-screen top-20 left-0 z-50 justify-center bg-[#1B264F]`}
      >
        <ul className='mt-3 flex flex-col items-center gap-5 text-white text-2xl'>
          {NAVBAR_LINKS.map((link) => {
            return (
              <li key={link.name} onClick={handleClose}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
