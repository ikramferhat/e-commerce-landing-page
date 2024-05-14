import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { ImagesAssets } from '../../images';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

const category = [
    {
        id : 'shirts'
    },
    {
        id : 'shorts'
    },
    {
        id : 'jacket'
    },
    {
        id : 'hoodies'
    },
    {
        id : 'trousers'
    },
    {
        id : 'shoes'
    },
    {
        id : 'accessories'
    }
]

const products = [
  {
    id: 1, 
    title: 'Nike Dri-Fit',
    image: ImagesAssets.img3,
    price: 60,
    category: "Men's T-shirt"
  },
  {
    id: 2, 
    title: 'Sportswear Max90',
    image: ImagesAssets.img5,
    price: 55,
    category: "Men's T-shirt"
  },
  {
    id: 3, 
    title: 'Sportswear Essentials',
    image: ImagesAssets.img1,
    price: 40,
    category: "Women's T-shirt"
  },
  {
    id: 4, 
    title: 'Nike Dri-Fit',
    image: ImagesAssets.img5,
    price: 70,
    category: "Men's T-shirt"
  }
]

const ProductCard = (props) => {
  return (
    <div className='product'>
      <div className='top'>
        <h3>$ {props.item.price}</h3>
      </div>
      <div className='image'>
        <img alt='img' src={props.item.image} />
      </div>
      <div className='bottom'>
        <div>
          <h3>{props.item.title}</h3>
          <p>{props.item.category}</p>
        </div>
        <button>
          <IoBagHandleOutline />
        </button>
      </div>
    </div>
  )
}

const LatestArrivalsSection = () => {
    const [active, setActive] = useState('shirts');
    const [openMenu, setOpenMenu] = useState(false);
    const [sliderRef, setSliderRef] = useState([]);

    const open = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <section id="LatestArrivalsSection">
      <div className='top-section'>
        <h3 className='title1'>updated trends for you</h3>
        <h1 className='title2'>latest arrivals by categories</h1>
      </div>
      <div className='menu'>
        <ul>
        {category.map((item, i) => {
          return (
            <li
              key={i}
              className={`${item.id === active && 'active-menu'}`}
              onClick={()=>setActive(item.id)}
            >
                {item.id}
            </li>
        )})}
        </ul>
        <div>
          <div className='toggle-mobile'>
            <RiMenu2Fill onClick={open} />
            <p>category</p>
          </div>
          <div className={`menu-content ${openMenu ? 'visible' : 'hidden'}`}>
            <ul>
              {category.map((item, i) => {
                return (
                <li
                  key={i}
                  className={`${item.id === active && 'active-menu'}`}
                  onClick={()=>setActive(item.id)}
                >
                  {item.id}
                </li>
              )})}
            </ul>
          </div> 
        </div>        
      </div>
      <Slider 
        ref={setSliderRef}
        autoplay={false}
        dots={false}
        infinite={true}
        speed={500}
        arrows={false}
        slidesToShow= {1}
        slidesToScroll= {1}
        variableWidth= {true}
      >
        {products.map((index,i)=>{
          return(
            <ProductCard 
              item={index}
            />
          )         
        })}
      </Slider>
    </section>
  )
}

export default LatestArrivalsSection;
;