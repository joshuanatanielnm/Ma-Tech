import Bounce from 'react-reveal/Bounce'
import FirstCard from '../components/FirstCard'
import React from 'react'

export default function Process() {
  return (
    <div className='mt-32 bg-blue-900' id='process'>
      <div className='container w-5/6 pt-20 pb-20 mx-auto md:w-full'>
        <Bounce top>
          <h1 className='text-center text-white'>
            <div className='inline-block text-3xl font-medium md:text-4xl'>
              Apa Yang Kita Lakukan
              <div className='h-2 bg-gray-400 rounded-full'></div>
            </div>
          </h1>
          <div className='w-full mx-auto mt-10 md:mx-2 lg:flex lg:justify-around '>
            <FirstCard
              number='1'
              title='Memilih'
              desc='Kami akan memilih dan menyaring berbagai resource yang berkualitas dari internet'
            />
            <FirstCard
              number='2'
              title='Mengatur'
              desc='Kami mengetur struktur belajar, agar kalian tetap bisa belajar secara terstruktur'
            />
            <FirstCard
              number='3'
              title='Project'
              desc='Kami memberikan project ringan, setelah kalian menyelesaikan pembelajaran'
            />
          </div>
        </Bounce>
      </div>
    </div>
  )
}
