import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import AboutMe from '../components/HomePageComponents/AboutMe'
import Footer from '../global/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <div className='pt-20'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
