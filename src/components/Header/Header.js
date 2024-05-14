import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GoHeart, GoSearch, GoPerson, GoLock, GoListUnordered, GoX } from 'react-icons/go';
import { HeaderDATA } from '../../data/DataText';
import CartSidebar from '../CartSidebar/CartSidebar';
import './style.scss';

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 992;

  const handleChange = event => {
    setSearch(event.target.value);
    console.log('value is:', event.target.value);
  }

  useEffect(() => {
    console.log('left==>', leftSidebar)
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, [width]);

   useEffect(() => {
    if (width > breakpoint) {
      setLeftSidebar(false);
    }
   }, [width]);

  const openrCart = () => {
    setCartOpen(!cartOpen);
  };

  const openLeftSidebar = () => {
    setLeftSidebar(!leftSidebar);
  };

  const openSearchBar = () => {
    setSearchOpen(!searchOpen);
  };


  return (
    <>
    <nav>
      <div className='navbar'>
        <div className='nav-logo'>
          <GoListUnordered color='white' onClick={openLeftSidebar} />
          <h3>StyleHub</h3>
        </div>
        <div className={`nav-liste ${ leftSidebar ? 'visible' : 'hidden' }`}>
          {HeaderDATA.map((item, i) => {
            return (
              <NavLink key={item.id} end to={item.path} activeClassName="active">
                <p>{item.name}</p>
              </NavLink>
            )
          })}
        </div>
        <div className='nav-icons'>
          <GoSearch onClick={openSearchBar} />
          <GoPerson />
          <GoHeart />
          <GoLock onClick={openrCart} />
        </div>
      </div>
      <div className={`searchcontainer ${ searchOpen  ? 'visible' : 'hidden' }`}>
        <input type="text" value={search} onChange={handleChange} placeholder="Search here..." />
        <span onClick={openSearchBar} >
          <GoX size={20} color='white' />
        </span>
      </div>
    </nav>
    {cartOpen && <div className="sidebarOverlay" onClick={openrCart} />}
    <CartSidebar open={cartOpen} close={openrCart}  />
    </>
  )
}

export default Header;
