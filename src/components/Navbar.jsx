import React, { useState } from 'react'

import { Link } from 'react-scroll'

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 30 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <div
      className={
        !navbar
          ? `z-50 w-full p-3 text-xl font-semibold text-white bg-blue-900 sm:text-2xl header fixed`
          : `z-50 w-full p-3 text-xl font-semibold text-blue-900 bg-white sm:text-2xl header fixed transition duration-200 `
      }
    >
      <div className='container justify-between w-full mx-auto my-5 sm:flex'>
        <div className='pb-3 text-center transition duration-500 sm:mb-0 sm:text-left'>
          <a href='/'>Ma-Tech</a>
        </div>
        {props.section === 'landingpage' ? (
          <div className='flex self-center justify-around text-lg font-normal sm:text-xl'>
            <Link
              activeClass='active'
              to='hero'
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className='mx-1 transition duration-500 cursor-pointer sm:mx-4 hover:underline'
            >
              Home
            </Link>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className='mx-1 transition duration-500 cursor-pointer sm:mx-4 hover:underline'
            >
              Tentang
            </Link>
            <Link
              activeClass='active'
              to='review'
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className='mx-1 transition duration-500 cursor-pointer sm:mx-4 hover:underline'
            >
              Review
            </Link>
            <Link
              activeClass='active'
              to='process'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className='mx-1 transition duration-500 cursor-pointer sm:mx-4 hover:underline'
            >
              Proses
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
