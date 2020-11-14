import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import Header from '../components/Navbar'
import Hero from '../parts/Hero'
import React from 'react'
import Slider from 'react-slick'
import dart from '../assets/logo/dart.png'
import flutter from '../assets/logo/flutter.png'
import ionic from '../assets/logo/ionic.png'
import java from '../assets/logo/java.png'
import javascript from '../assets/logo/javascript.png'
import kotlin from '../assets/logo/kotlin.png'
import react from '../assets/logo/reactjs.png'
import swift from '../assets/logo/swift.png'

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
        title='Mobile Developer'
        desc='Belajar basic pemrograman agar dapat menjadi mobile developer handa'
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
            title='Java'
            desc='Belajar dasar pemrogamman Java untuk membuat aplikasi android native'
            image={java}
            link='https://www.youtube.com/watch?v=uHyfQV0kbgo&list=PLZS-MHyEIRo51w0Hmqi0C8h2KWNzDfo6F'
          />
          <CourseCard
            title='Kotlin'
            desc='Belajar dasar pemrogamman Kotlin untuk membuat aplikasi android native'
            image={kotlin}
            link='https://www.youtube.com/watch?v=6dSNbskzlz4&list=PL-CtdCApEFH_hja5vRJgQOXylCiQud7Qa'
          />
          <CourseCard
            title='Dart'
            desc='Belajar dasar pemrogamman Dart sebagai dasar untuk membuat aplikasi Hybrid'
            image={dart}
            link='https://www.youtube.com/watch?v=mY6PquN1MXk&list=PLTt6cYXh21UEIh8G84eC7rUo-DiFUAvqO'
          />
          <CourseCard
            title='Javascript'
            desc='Belajar dasar pemrogamman Javascript sebagai dasar untuk membuat aplikasi Hybrid'
            image={javascript}
            link='https://www.youtube.com/watch?v=RUTV_5m4VeI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w'
          />
        </Slider>

        <div className='flex '>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            Hybrid
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='Flutter'
            desc='Belajar dasar Flutter untuk membuat aplikasi Hybrid'
            image={flutter}
            link='https://www.youtube.com/watch?v=SoX3cel4LRM&list=PLZQbl9Jhl-VACm40h5t6QMDB92WlopQmV'
          />
          <CourseCard
            title='React Native'
            desc='Belajar dasar React Native untuk membuat aplikasi Hybrid'
            image={react}
            link='https://www.youtube.com/watch?v=bSLGgJC0C9k&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV'
          />
          <CourseCard
            title='IONIC'
            desc='Belajar dasar IONIC untuk membuat aplikasi Hybrid'
            image={ionic}
            link='https://www.youtube.com/watch?v=0jamhGf-8ww&list=PLYxzS__5yYQljbuGjaeugpqs9U07gS5P5'
          />
        </Slider>
      </div>
      <Footer />
    </div>
  )
}
