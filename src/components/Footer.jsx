import React from 'react'
import Waveup from '../assets/waveup.svg'
import maskot from '../assets/maskot.svg'
import unesa from '../assets/unesa.svg'

export default function Footer() {
  return (
    <div>
      <img src={Waveup} alt='wave' className='w-full -mb-5' />
      <div className='pb-20 bg-blue-900'>
        <div className='container flex-row justify-around mx-auto lg:flex'>
          <div className='mx-2 lg:mx-0'>
            <h3 className='text-2xl font-medium text-white lg:text-3xl'>
              Penyelenggara
            </h3>
            <div className='flex mt-2'>
              <img src={unesa} alt='' className='' />
              <img src={maskot} alt='' className='px-3 lg:px-5' />
            </div>
          </div>
          <div className='w-5/6 mx-2 lg:w-1/5 lg:mx-0'>
            <h3 className='text-2xl font-medium text-white lg:text-3xl'>
              Ma-Tech
            </h3>
            <div className='mt-2 text-xl font-light text-gray-200 lg:text-2xl'>
              Website untuk Belajar software development Dengan Terstruktur Dan
              Gratis
            </div>
          </div>
          <div className='mx-2 lg:mx-0'>
            <h3 className='text-2xl font-medium text-white lg:text-3xl'>
              Resource
            </h3>
            <div className='text-xl font-light text-gray-200 lg:text-2xl'>
              <div className='my-2'>
                <a href=''>Frontend development</a>
              </div>
              <div className='my-2'>
                <a href=''>Backend development</a>
              </div>
              <div className='my-2'>
                <a href=''>Mobile development</a>
              </div>
            </div>
          </div>
          <div className='mx-2 lg:mx-0'>
            <h3 className='text-2xl font-medium text-white lg:text-3xl'>
              Our Team
            </h3>
            <div className='text-xl font-light text-gray-200 lg:text-2xl'>
              <div className='my-2'>Joshua Nathaniel M</div>
              <div className='my-2'>Musa Al Farid</div>
              <div className='my-2'>Firlyana Dewi PB</div>
            </div>
          </div>
        </div>
        <div className='mt-16 text-xl text-center text-white'>
          © 2020 Ma-Tech
        </div>
      </div>
    </div>
  )
}
