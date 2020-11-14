import React from 'react'

export default function CourseCard(props) {
  return (
    <div className='mx-2 text-gray-800 transition duration-500 bg-white shadow-lg rounded-xl hover:bg-gray-800 hover:text-white'>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <div className='flex-col self-center justify-center pt-10 pb-5 my-5 text-center'>
          <div className='flex justify-center h-40 '>
            <div className='flex self-center justify-center '>
              <img src={props.image} alt='' className='w-32 h-auto' />
            </div>
          </div>
          <h3 className='mt-8 text-xl font-bold md:mt-8 md:text-2xl'>
            {props.title}
          </h3>
          <div className='flex justify-center h-32 mt-3 text-lg md:mt-6 md:text-xl'>
            <div className='w-1/2'>{props.desc}</div>
          </div>
        </div>
      </a>
    </div>
  )
}
