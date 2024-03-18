
import React from 'react';
import './Header.css';

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const details = useSelector((state) => state.cart.items.length)
  const role = useSelector((state) => state?.userDetails?.userDetails.roles)
  
  const navigate = useNavigate()
  return (
    <header className="header">
      <div className="logo">Book Store</div>
      <div style={{display: 'flex'}}>
        {
          role ==='admin' && (
            <button
            className="btn"
            onClick={() => navigate("/addNew")}
        >
            Add New Product 
        </button>
          )
        }
   
      <button className="btn" onClick={() => navigate("/cart")}>Go to Cart </button> <span>{details}</span>
      </div>
    </header>
  );
};

export default Header;
