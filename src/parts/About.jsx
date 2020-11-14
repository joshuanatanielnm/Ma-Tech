import Bounce from 'react-reveal/Bounce'
import React from 'react'
import iluSec2 from '../assets/sec2ilu.svg'

export default function About() {
  return (
    <div className='flex mt-32 sm:mt-32' id='about'>
      <div className='container flex justify-between mx-auto text-center md:text-left'>
        <Bounce left>
          <div className='container self-center w-3/4 mx-auto'>
            <h1 className='inline-block text-3xl font-medium sm:text-4xl'>
              Tentang Ma-Tech
              <div className='h-2 bg-gray-400 rounded-full'></div>
            </h1>
            <div className='mt-5 text-2xl text-gray-800 sm:text-3xl'>
              Ma-Tech adalah platform yang dapat membantu kalian untuk belajar
              materi software development, dengan terstruktur dan gratis,
              sehingga kalian tidak perlu bingung lagi urutan materi yang harus
              dipelajari.
            </div>
          </div>
        </Bounce>
      </div>

      <Bounce right>
        <div className='hidden float-right w-3/4 md:block'>
          <img src={iluSec2} alt='' className='w-full' />
        </div>
      </Bounce>
    </div>
  )
}
