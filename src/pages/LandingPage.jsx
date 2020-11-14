import About from '../parts/About'
import Footer from '../components/Footer'
import Hero from '../parts/Hero'
import Navbar from './../components/Navbar'
import Path from '../parts/Path'
import Process from '../parts/Process'
import React from 'react'
import Review from '../parts/Review'

export default function LandingPage() {
  return (
    <div>
      <Navbar section='landingpage' />
      <Hero section='landingpage' />
      <About />
      <Review />
      <Process />
      <Path />
      <Footer />
    </div>
  )
}
