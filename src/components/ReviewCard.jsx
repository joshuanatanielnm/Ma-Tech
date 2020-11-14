import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className='mx-3 text-gray-700 transition duration-500 bg-white rounded-xl hover:bg-gray-700 hover:text-white '>
      <div className='flex-col justify-center px-5 py-5'>
        <div>
          <div className='px-2 py-2 text-xl text-center'>
            <span className='font-mono text-6xl'>"</span>
            <br />
            <div className='-mt-10'>{props.desc}</div>
          </div>
          <div className='h-1 bg-gray-100'></div>
        </div>
        <div className='flex justify-center py-4'>
          <img
            src={props.image}
            alt=''
            className='w-20 h-20 mx-3 rounded-full'
          />
          <div className='self-center mx-3'>
            <div className='text-lg font-medium'>{props.name}</div>
            <div>{props.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
