import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Button from '../../components/Button/Button';

import './style.scss';
const Footer = () => {
  return (
    <footer>
      <div className='top-wrapper'>
        <div className='container'>
          <div className='form-conatiner'>
              <div>
                <h1 className='title2'>Join Our Newsletter</h1>
                <p className='text-base'>Banking technology that has your back</p>
              </div>
              <div className='custom-search'>
                <input value={"Entre your email"} />
                <Button black title="subscribe" />
              </div>   
          </div>
        </div>
      </div>
      <div className='container middle'>
        <Row className='mt-2 gy-3 gx-3 justify-content-md-between'>
          <Col xs={12} md={5}>
            <div>
              <h1>StyleHub</h1>
              <p>Design amazing digital experiences that create more happy in the world.</p>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div>
              <p>Shop</p>
              <p>Men's Product</p>
              <p>Women's Product</p>
              <p>Winter Edition</p>
              <p>Accessories</p>
              <p>Discounts</p>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div>
              <p>Company</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>News</p>
              <p>Purpose</p>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div>
              <p>Support</p>
              <p>Order Status</p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
              <p>Payment Option</p>
              <p>Contact</p>
            </div>
          </Col>
        </Row>
        <div className='bottom'>
            <p>@ 2021 StyleHub. All rights reserved.</p>
            <div className='social'>
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;