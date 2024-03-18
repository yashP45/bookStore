import React, { useState, useEffect } from 'react';
import './ProductViewPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useSelector , useDispatch} from 'react-redux';
import { add } from '../app/cartSlice';
const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const role = useSelector((state) => state?.userDetails?.userDetails.roles)
  console.log(role === "admin")

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/book/getbook/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/book/delete/${id}`);
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
  
    <div className="product-view">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Description: {product.desc}</p>
        <p>Author: {product.author}</p>
        <p>Price: ${product.price}</p>
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        <div>Categories: {product.categories.join(', ')}</div>
        <div className="buttons">
        {role === 'admin' && (
            <button className="btn delete-btn">
              Delete
            </button>
          )}
        <button className="btn" onClick={() => handleAdd(product)}>Add to Cart</button>
       </div>
      </div>
  
    </div>
    </div>
  );
};

export default ProductViewPage;
