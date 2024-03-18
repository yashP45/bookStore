
import React from 'react';
import './ProductCard.css'; 
import {add} from "./../../app/cartSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleAdd = (product) => {
    dispatch(add(product));
};

const onViewClick =() => {
  navigate(`/view/${product._id}`);
}
  
  return (

        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <p>{product.desc}</p>
     
            <div className="buttons">
          <button className="btn" onClick={() => onViewClick(product)}>View</button>
        <button className="btn" onClick={() => handleAdd(product)}>Add to Cart</button>
       </div>
        </div>
 

  );
};

export default ProductCard;
