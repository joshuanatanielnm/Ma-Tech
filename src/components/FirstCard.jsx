import Bounce from 'react-reveal/Bounce'
import React from 'react'

export default function FirstCard(props) {
  return (
    <Bounce bottom delay={100 * props.number}>
      <div className='mt-5 text-center text-gray-200 bg-gray-900 rounded-3xl md:mx-2 lg:w-1/3 lg:mt-0'>
        <div className='py-16 md:px-4 md:py-20'>
          <div className='flex justify-center'>
            <div className='flex justify-center w-24 h-24 rounded-full md:w-32 md:h-32 bg-gradient-to-t from-purple-700 to-blue-600'>
              <span className='self-center text-4xl font-medium md:text-5xl'>
                {props.number}
              </span>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex-col justify-center w-8/12'>
              <h3 className='mt-5 text-2xl font-medium md:mt-8 md:text-3xl'>
                {props.title}
              </h3>
              <div className='mt-3 text-xl text-gray-300 md:mt-6 md:text-2xl'>
                {props.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounce>
  )
}
