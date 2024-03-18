// Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { setUser } from '../app/slice';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://myshoppro.onrender.com/api/v1/auth/Login', data); 
      dispatch(setUser(response.data.user));
      navigate("/home");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Login</button>
      </form>
      
      {/* Link to go to signup page */}
      <div className="signup-link">
        Don't have an account? <Link to="/">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
