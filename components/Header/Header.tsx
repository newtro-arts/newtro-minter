'use client'

import Link from 'next/link'
import LoginButton from '../LoginButton'
import Image from 'next/image'

const Header = () => {
  return (
    <div id="header" className="flex justify-between items-center fixed top-0 left-0 w-screen z-[100] px-5 bg-[#D1F121]">
      <Link href="https://newtro.xyz">
          <Image
            src="/Logos-03.svg"
            alt="NEWTRO Logo"
            width={132}
            height={63}
          />
      </Link>
      <LoginButton />
    </div>
  )
}

export default Header
