import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImArrowUpRight2 } from "react-icons/im";
import Container from 'react-bootstrap/Container';
import Button from '../../components/Button/Button';
import { ImagesAssets } from '../../images';
import './style.scss';

const SaleSecion = () => {
  return (
    <section id="SaleSecion">
      <Row className='mt-5'>
        <Col xs={12}>
          <div className='paper'>
            <div className='text'>           
              <h1 className='title2'>Save 50% this holiday season</h1>
              <p className='text-base'>It's time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbeatable deals on the most coveted styles.</p>
              <Button black arrow title="shop now" />
            </div>
            <div className='img-container'>
              <img src={ImagesAssets.img9} />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default SaleSecion;