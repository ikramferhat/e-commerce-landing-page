import React from 'react';
import {
  HeroSection,
  LatestCollectionSection,
  LatestArrivalsSection,
  FeaturedSection,
  SaleSecion
} from '../../sections';
import './style.scss'

const Home = () => {
  return (
    <div id='home'>
      <div className='container'>
        <HeroSection />
        <LatestCollectionSection />
        <LatestArrivalsSection />
        <FeaturedSection />
        <SaleSecion />
      </div>
  </div>
  )
}

export default Home;