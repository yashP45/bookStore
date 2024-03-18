// SignUp.js

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from '../app/slice';
import './SignUp.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://myshoppro.onrender.com/api/v1/auth/signup', data); 
      dispatch(setUser(response.data.data.user));
      navigate("/home");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", { required: true })}
          />
          {errors.passwordConfirm && <span>This field is required</span>}
        </div>
        <button type="submit">Sign Up</button>
        
      </form>

      <p>Already have an account? <Link to="/login">Log in</Link></p>

    </div>
  );
};

export default SignUp;
