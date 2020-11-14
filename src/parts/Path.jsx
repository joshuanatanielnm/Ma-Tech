import Bounce from 'react-reveal/Bounce'
import React from 'react'
import SecondCard from '../components/SecondCard'
import ilu1 from '../assets/ilu1.svg'
import ilu2 from '../assets/ilu2.svg'
import ilu3 from '../assets/ilu3.svg'

export default function Path(props) {
  return (
    <Bounce bottom>
      <div className='container pt-20 pb-20 mx-auto' id='path'>
        <h1 className='text-center'>
          <div className='inline-block text-3xl font-medium md:text-4xl'>
            Pilih Perjalananmu
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </div>
        </h1>

        <div className='w-full mx-auto mt-10 md:mx-2 lg:flex lg:justify-around '>
          <SecondCard
            image={ilu1}
            route='frontend'
            number='1'
            title='Frontend Developer'
            desc='Mulai perjalananmu sebagai Frontend developer. Disini Ma-Tech sudah mengatur materi yang harus kalian pelajari terlebih dulu'
          />
          <SecondCard
            image={ilu2}
            number='2'
            route='backend'
            title='Backend Developer'
            desc='Mulai perjalananmu sebagai Backend developer. Disini Ma-Tech sudah mengatur materi yang harus kalian pelajari terlebih dulu'
          />
          <SecondCard
            image={ilu3}
            number='3'
            route='mobile'
            title='Mobile Developer'
            desc='Mulai perjalananmu sebagai Mobile developer. Disini Ma-Tech sudah mengatur materi yang harus kalian pelajari terlebih dulu'
          />
        </div>
      </div>
    </Bounce>
  )
}
