import Bounce from 'react-reveal/Bounce'
import React from 'react'

export default function SecondCard(props) {
  return (
    <div className='mx-5 mt-5 transform bg-white rounded-lg shadow-xl cursor-pointer md:mx-2 lg:w-1/3 lg:mt-0 hover:scale-105'>
      <Bounce bottom delay={100 * props.number}>
        <a href={props.route}>
          <div className='py-16 md:px-4 md:py-20'>
            <div className='flex justify-center'>
              <img src={props.image} alt='' className='w-10/12 h-56' />
            </div>
            <div className='flex justify-center'>
              <div className='flex-col justify-center w-11/12'>
                <h3 className='mt-8 text-2xl font-medium md:mt-8 md:text-3xl '>
                  {props.title}
                </h3>
                <div className='mt-3 text-xl text-gray-700 md:mt-6 md:text-2xl'>
                  {props.desc}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Bounce>
    </div>
  )
}
