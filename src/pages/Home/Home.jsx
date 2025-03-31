import React from 'react'
import Banner from './Banner'
import HomeAbout from './HomeAbout'
import OurPackages from './OurPackages'
import WhyChooseUs from './WhyChooseUs'
import HeroSection from './HeroSection '
import TestimonialSlider from './TestimonialSlider'
import HowItWorks from '../../components/HowItWorks'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeAbout/>
      <OurPackages/>
      <WhyChooseUs/>
      <HeroSection/>
      <HowItWorks/>
      <TestimonialSlider/>
    </div>
  )
}

export default Home