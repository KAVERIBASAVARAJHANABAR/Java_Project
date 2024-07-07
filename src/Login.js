import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lgn.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/api/login', { emailid: email, password })
        .then(response => {
          setMessage('Login successful!');
          navigate('/'); // Redirect to home page
        })
        .catch(error => {
          setMessage('Invalid email or password');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  return (
    <div className='logincon'>
      <div className="container8">
        <h1>Login now!</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email" 
            value={email} 
            className="input" 
            onChange={handleEmailChange} 
          /><br/>
          {errors.email && <span className="error">{errors.email}</span>}
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            className="input" 
            onChange={handlePasswordChange} 
          /><br/>
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit" className="input2">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
