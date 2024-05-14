import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImArrowUpRight2 } from "react-icons/im";
import Container from 'react-bootstrap/Container';
import Button from '../../components/Button/Button';
import { ImagesAssets } from '../../images';
import './style.scss';

const LatestCollectionSection = () => {
  return (
    <section id="LatestCollectionSection">
      <div className='top-section'>
        <h1 className='title2'>explore our latest collection for you</h1>
        <p className='text-base'>Explore our latest collection to unleash your inner fashionista and embark on a journey of confidence, elegance, and impeccable style.</p>
      </div>
      <Row className='mt-5 gy-3 gx-3 justify-content-center'>
        <Col xs={12} md={7}>
          <Row className='gy-3 gx-3'>
            <Col xs={12}>
              <div className='shop-card c-1'>
                <img src={ImagesAssets.img8} />
                <div className='overlay'>
                  <button className='circle'><ImArrowUpRight2 /></button>
                  <div className='bottom-text'>
                    <h1>collection for couples</h1>
                    <p>Our collection for couples features coordinated designs and patterns, allowing couples to showcase their unity through fashion.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} xs={12}>
              <div className='shop-card c-2'>
                <img src={ImagesAssets.img7} />
                <div className='overlay'>
                  <div className='bottom-text'>
                    <h1>Leather Watch Collection</h1>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} xs={12}>
              <div className='shop-card c-2'>
                <img src={ImagesAssets.img5} />
                <div className='overlay'>
                  <div className='bottom-text'>
                    <h1>New Tote Bags Collection</h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4} xs={12}>
          <div className='shop-card c-3'>
            <img src={ImagesAssets.img6} />
            <div className='overlay'>
              <div className='bottom-text'>
                <h1>Sheer Bomber Jacket</h1>
                <p>Introducing our stylish and versatile sheer clergy caped bomber jacket.</p>
                <Button outline arrow rotate title="shop now" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default LatestCollectionSection;
;