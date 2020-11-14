import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import Header from '../components/Navbar'
import Hero from '../parts/Hero'
import React from 'react'
import Slider from 'react-slick'
import angular from '../assets/logo/angular.png'
import bootstrap from '../assets/logo/bootstrap.png'
import css from '../assets/logo/css.png'
import frontendilu from '../assets/ilu1.svg'
import git from '../assets/logo/git.png'
import html from '../assets/logo/html.png'
import javascript from '../assets/logo/javascript.png'
import react from '../assets/logo/reactjs.png'
import svelte from '../assets/logo/svelte.png'
import tailwind from '../assets/logo/tailwind.svg'
import vue from '../assets/logo/vue.png'
import yarn from '../assets/logo/yarn.png'

export default function FrontendCourse() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div>
      <Header />
      <Hero
        title='Frontend Developer'
        desc='Belajar basic yang diperlukan untuk memulai karir menjadi Frontend Developer handal'
        image={frontendilu}
      />
      <div className='container mx-auto mt-20'>
        <div className='flex '>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            Dasar
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='HTML'
            desc='Belajar membuat struktur dari sebuah website dengan HTML'
            image={html}
            link='https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F'
          />
          <CourseCard
            title='CSS'
            desc='Belajar membuat tampilan website lebih cantik dengan CSS'
            image={css}
            link='https://www.youtube.com/watch?v=J0a6YUUAsd4&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa'
          />
          <CourseCard
            title='Javascript'
            desc='Belajar membuat tampilan website lebih interaktif dengan javascript'
            image={javascript}
            link='https://www.youtube.com/watch?v=ttYTx_wGcQY&list=PLCZlgfAG0GXAiH1acKFPx8EtpJAq44gjP'
          />
          <CourseCard
            title='Git'
            desc='Belajar berkerjasama dengan rekanmu menggunakan GIT'
            image={git}
            link='https://www.youtube.com/watch?v=lTMZxWMjXQU&list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf'
          />
          <CourseCard
            title='Yarn'
            desc='Belajar Organisir package kamu dengan Yarn'
            image={yarn}
          />
        </Slider>

        <div className='flex mt-10'>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            CSS Framework Populer (Pilih satu)
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='Tailwind'
            desc='Belajar membuat layout dengan tailwindcss'
            image={tailwind}
            link='https://www.youtube.com/watch?v=ZmYWFHb0GsM&list=PLwvMCa_o2Lau0edGDxqJX99SFk6_N2Cjh'
          />
          <CourseCard
            title='Bootstrap'
            desc='Belajar membuat layout dengan Bootstrap'
            image={bootstrap}
            link='https://www.youtube.com/watch?v=tvVO6Lnk5J0&list=PLce3Eyp7oY9-o3JavSawkXcazJSYx7KAf'
          />
        </Slider>

        <div className='flex mt-10'>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            Javascript Framework Populer (Pilih satu)
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='Reactjs'
            desc='Belajar membuat website modern dengan Reactjs'
            image={react}
            link='https://www.youtube.com/watch?v=5kHyviqjhCk&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb'
          />
          <CourseCard
            title='Vuejs'
            desc='Belajar membuat website modern dengan Vuejs'
            image={vue}
            link='https://www.youtube.com/watch?v=EmCBOtkXxdg&list=PLCZlgfAG0GXCFeOD_wBc9GrYF9pA8loLQ'
          />
          <CourseCard
            title='Sveltejs'
            desc='Belajar membuat website modern dengan Sveltejs'
            image={svelte}
            link='https://www.youtube.com/watch?v=8VLojVFUt5U&list=PLH1gH0TmFBBhWp2pn6vRhUVVC1txQuTZE'
          />
          <CourseCard
            title='Angularjs'
            desc='Belajar membuat website modern dengan Angularjs'
            image={angular}
            link='https://www.youtube.com/watch?v=Zi4aAYYuuMc&list=PL-6LbU641p4jVYTZJb1MfMQwq4Wq249ov'
          />
        </Slider>
      </div>
      <Footer />
    </div>
  )
}
