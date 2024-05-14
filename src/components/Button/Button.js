import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import './style.scss';

const Button = (props) => {
  return (
    <button className={`btn ${props.black && 'black'} ${props.outline && 'outline'}`}>
      <span>{props.title}</span>
      {props.arrow && <span><FaArrowRightLong className={`arrow ${props.rotate && 'rotate'}`} size="15px" /></span>}
    </button>
  )
}

export default Button;