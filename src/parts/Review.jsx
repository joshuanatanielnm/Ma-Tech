import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import ReviewCard from '../components/ReviewCard'
import Slider from 'react-slick'
import alfin from '../assets/review/alfin.jpg'
import angelo from '../assets/review/angelo.jpg'
import dimas from '../assets/review/dimas.jpg'
import jojo from '../assets/review/jojo.png'
import Bounce from 'react-reveal/Bounce'
import rudi from '../assets/review/rudi.PNG'

export default function review() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <Bounce bottom delay={100}>
      <div className='container mx-auto mt-32' id='review'>
        <div className='flex justify-center'>
          <h1 className='inline-block text-3xl font-medium text-center sm:text-4xl '>
            Testimonials
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <div className='mt-5 '>
          <Slider {...settings}>
            <ReviewCard
              image={jojo}
              title='Remote Frontend Developer'
              desc='Gak nyangka bisa belajar lebih terstruktur dan geratis, sukses terus ma-tech'
              name='Joshua Nathaniel M'
            />
            <ReviewCard
              image={alfin}
              title='Mobile Developer'
              desc='Sebelumnya bingung urutan belajar kalau mau jadi mobile dev, sekarang udh bisa makasih ma-tech'
              name='Alfin Sugestian'
            />
            <ReviewCard
              image={rudi}
              title='UI/UX Designer'
              desc='Makasih banget ya Ma-tech, materinya terstruktur banget jadi gak bingung lagi harus belajar dari mana'
              name='Muchtarudin'
            />

            <ReviewCard
              image={dimas}
              title='Instagram Filter Developer'
              desc='Biasanya saya kalau belajar cari2 di youtube terus bingung lanjutannya harus lanjut belajar apa lagi'
              name='Dimas Surya P'
            />

            <ReviewCard
              image={angelo}
              title='Software Developer'
              desc='karena ma-tech saya bisa belajar lebih terstruktur, makasih ma-tech sukses teruss'
              name='Christoper Angelo'
            />
          </Slider>
        </div>
      </div>
    </Bounce>
  )
}
