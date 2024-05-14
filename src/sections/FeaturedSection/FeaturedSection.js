import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button/Button';
import { ImagesAssets } from '../../images';
import './style.scss';

const FeaturedSection = () => {
  return (
    <section id="FeaturedSection">
      <div className='top-section'>
        <h1 className='title2'>Featured</h1>
      </div>
      <Row className='mt-2 gy-3 gx-3 justify-content-center'>
        <Col xs={12} md={6}>
          <div className='shop-card'>
            <img src={ImagesAssets.img11} />
            <div className='overlay'>
              <div className='bottom-text'>
                <h1>Bottega Veneta Women Exclusive Series</h1>
                <Button black arrow title="shop now" />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='shop-card'>
            <img src={ImagesAssets.img10} />
            <div className='overlay'>
              <div className='bottom-text'>
                <h1>Street Wear Style Trend Collection</h1>
                <Button black arrow title="shop now" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default FeaturedSection;