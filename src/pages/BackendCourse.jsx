import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import Header from '../components/Navbar'
import Hero from '../parts/Hero'
import React from 'react'
import Slider from 'react-slick'
import couchdb from '../assets/logo/couchDB.png'
import css from '../assets/logo/css.png'
import git from '../assets/logo/git.png'
import golang from '../assets/logo/go.png'
import html from '../assets/logo/html.png'
import javascript from '../assets/logo/javascript.png'
import mariadb from '../assets/logo/mariadb.png'
import mongodb from '../assets/logo/mongodb.png'
import mysql from '../assets/logo/mysql.png'
import oracle from '../assets/logo/oracle.png'
import php from '../assets/logo/php.png'
import postgresql from '../assets/logo/postgresql.png'
import pyhton from '../assets/logo/pyhton.png'
import rethinkdb from '../assets/logo/rethinkdb.png'
import rust from '../assets/logo/rust.png'
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
        title='Backend Developer'
        desc='Belajar basic yang diperlukan untuk memulai karir menjadi Backend Developer handal'
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
            Bahasa pemrograman (Pilih satu)
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='Golang'
            desc='Belajar basic dari bahasa golang'
            image={golang}
            link='https://www.youtube.com/watch?v=nyGu8Xn5b3g&list=PL-CtdCApEFH_t5_dtCQZgWJqWF45WRgZw'
          />
          <CourseCard
            title='Pyhton'
            desc='Belajar basic dari bahasa Pyhton'
            image={pyhton}
            link='https://www.youtube.com/watch?v=SQ6dHC9msEA&list=PLZS-MHyEIRo7cgStrKAMhgnOT66z2qKz1'
          />
          <CourseCard
            title='PHP'
            desc='Belajar basic dari bahasa PHP'
            image={php}
            link='https://www.youtube.com/watch?v=l1W2OwV5rgY&list=PLFIM0718LjIUqXfmEIBE3-uzERZPh3vp6'
          />
          <CourseCard
            title='Rust'
            desc='Belajar basic dari bahasa Rust'
            image={rust}
            link='https://www.youtube.com/watch?v=zF34dRivLOw'
          />
        </Slider>

        <div className='flex mt-10'>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            Relational Database (Pilih satu)
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='PostgreSQL'
            desc='Belajar basic dari PostgreSQL'
            image={postgresql}
            link='https://www.youtube.com/watch?v=WgABoubjQdY&list=PLV1-tdmPblvypZXSk2GC932nludT345xk'
          />
          <CourseCard
            title='MySQL'
            desc='Belajar basic dari PostgreSQL'
            image={mysql}
            link='https://www.youtube.com/watch?v=BfwEPIOKTsg&list=PLF82-I80PwDN7KSzsJOmd8mwHYe4aAqfF'
          />
          <CourseCard
            title='MariaDB'
            desc='Belajar basic dari MariaDB'
            image={mariadb}
            link='https://www.youtube.com/watch?v=hFcSVCxuG3k&list=PLbJBWs8bgJqFenZ2Vu7YFtZPdixDbSvgw'
          />
          <CourseCard
            title='Oracle'
            desc='Belajar basic dari Oracle'
            image={oracle}
            link='https://www.youtube.com/watch?v=1o0c-zD3iFU'
          />
        </Slider>

        <div className='flex mt-10'>
          <h1 className='inline-block mx-4 text-3xl font-medium sm:text-4x'>
            NoSQL Database (Pilih satu)
            <div className='h-2 bg-gray-400 rounded-full'></div>
          </h1>
        </div>
        <Slider {...settings}>
          <CourseCard
            title='MongoDB'
            desc='Belajar basic dari MongoDB'
            image={mongodb}
            link='https://www.youtube.com/watch?v=JXXUBiJGu94&list=PL-CtdCApEFH-eFFdPeS5e16o3THdmvxvz'
          />
          <CourseCard
            title='RethinkDB'
            desc='Belajar basic dari RethinkDB'
            image={rethinkdb}
            link='https://www.youtube.com/watch?v=pW3PFtchHDc'
          />
          <CourseCard
            title='CouchDB'
            desc='Belajar basic dari CouchDB'
            image={couchdb}
            link='https://www.youtube.com/watch?v=nlqv9Np3iAU'
          />
        </Slider>
      </div>
      <Footer />
    </div>
  )
}
