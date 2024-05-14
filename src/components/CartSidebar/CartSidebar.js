import React from 'react';
import { GoX } from 'react-icons/go';
import './style.scss';

const CartSidebar = (props) => {
  return (
    <div className='cart-menu-right' style={{ transform: props.open ? 'translateX(0%)' : 'translateX(100%)'}}>
      <div className="top">
        <h4>Cart</h4>
        <button onClick={props.close}>
          <GoX />
        </button>
      </div>
    </div>
  )
}

export default CartSidebar;