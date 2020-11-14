import Bounce from 'react-reveal/Bounce'
import Ilulanding from '../assets/landingpageilu.svg'
import { Link } from 'react-scroll'
import React from 'react'
import Wavedown from '../assets/wavedown.svg'

const Herolanding = () => {
  return (
    <div className='mt-32 sm:mt-5'>
      <h1 className='text-3xl font-medium sm:text-4xl'>
        Belajar software development <br /> Dengan{' '}
        <span className='italic'>Terstruktur</span> Dan{' '}
        <span className='italic'>Gratis</span>
      </h1>
      <div className='mt-2 mb-6 text-base sm:text-lg sm:mb-12 sm:mt-5'>
        Kami membantu kalian belajar lebih terstruktur
      </div>
      <Link
        activeClass='active'
        to='path'
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        className='px-6 py-3 text-base font-medium text-white bg-blue-700 rounded-full shadow-2xl cursor-pointer sm:text-lg sm:px-8 sm:py-4 hover:bg-blue-800 hover:text-white '
      >
        Mulai Perjalananmu
      </Link>
    </div>
  )
}

const HeroCourse = (props) => {
  return (
    <div className='mt-20 sm:mt-0 '>
      <h1 className='text-3xl font-medium sm:text-4xl'>{props.title}</h1>
      <div className='mt-2 mb-6 text-base sm:text-lg sm:mb-12 sm:mt-5'>
        {props.desc}
      </div>
    </div>
  )
}

export default function Hero(props) {
  return (
    <div className='sm:pt-20' id='hero'>
      <div className='px-2 py-5 text-center text-white bg-blue-900'>
        <Bounce right delay={300}>
          {props.section === 'landingpage' ? (
            <Herolanding />
          ) : (
            <HeroCourse {...props} />
          )}
        </Bounce>
      </div>
      <div>
        <Bounce left delay={300}>
          <div className='z-10 flex justify-center'>
            <img
              src={Ilulanding}
              alt=''
              className='absolute w-3/4 mt-2 sm:mt-5 sm:w-1/2 '
            />
          </div>
        </Bounce>
        <img src={Wavedown} alt='test' className='z-0 w-full -mt-5' />
      </div>
    </div>
  )
}
