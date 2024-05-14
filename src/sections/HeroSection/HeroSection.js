import React from 'react';
import Button from '../../components/Button/Button';
import { ImagesAssets } from '../../images';
import './style.scss';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className='top-section'>
        <h3 className='title1'>experience fashion like never before</h3>
        <h1 className='title2'>elevate your style with styleHlub: where fashion meets passion</h1>
        <p className='text-base'>Discover a world of fashion-forward trends, curated collections, and timeless pleces that inspire. Unleash your inner fashionista and embark on a journey of confidence, elegance and impeccable style.</p>
        <div className='btn-container'>
          <Button black title='start shoping' />
        </div>
      </div>
      <div className='hero-image'>
        <img src={ImagesAssets.hero} />
      </div>
    </section>
  )
}

export default HeroSection;