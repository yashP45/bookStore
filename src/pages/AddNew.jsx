import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddNew.css'; 

const AddNew = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://myshoppro.onrender.com/api/v1/book/createBook', data);
  
      navigate("/home")
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };

  return (
    <div className='add-new-container'>
    <h2>Add New Item</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input type="text" {...register( "title" , { required: true })} />
        
      </div>
      <div>
        <label>Description:</label>
        <textarea  {...register( "desc", { required: true })}></textarea>
       
      </div>
      <div>
        <label>Price:</label>
        <input type="number"  {...register( "price", { required: true })} />
       
      </div>
      <div>
        <label>Author:</label>
        <input type="text" {...register("author", { required: true })} />
       
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" {...register( "image" , { required: true })} />
       
      </div>
      <div>
        <label>Categories:</label>
        <input type="text" name="categories" {...register( "categories", { required: true })} />
       
      </div>
      
      <button type="submit">Add Item</button>
    </form>
  </div>

  );
};

export default AddNew;
