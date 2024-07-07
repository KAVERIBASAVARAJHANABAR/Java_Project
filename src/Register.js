import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import Registerimg from './registerimg.jpg';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    password:'',
    email: '',
    phone_number: '',
    street:'',
    pincode:'',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/addRegister', formData)
      .then(response => {
        console.log(response.data);
        alert('User registered successfully!');
        navigate('/login'); // Redirect to login page
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('There was an error registering the user!');
      });
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/update/${formData.email}`, formData)
      .then(response => {
        console.log(response.data);
        alert('User data updated successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('There was an error updating user data!');
      });
  };

  return (
    <div>
      <div>
        <img src={Registerimg} alt='Registerimg' className='registerimg' />
      </div>

      <div className="container25">
        <h1>Register now!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="first_name" placeholder="First name" className="input" minLength={3} maxLength={15} onChange={handleChange} required/><br />
          <input type="text" name="last_name" placeholder="Last name" className="input" onChange={handleChange} required/><br />
          <input type="text" name="email" placeholder="E-mail" className="input" onChange={handleChange} required/><br />
          <input type="password" name="password" placeholder="Password" className="input" minLength={6} maxLength={10} onChange={handleChange} required/><br />
          <input type="tel" name="phone_number" placeholder="Phone number" className="input" minLength={10} maxLength={10} onChange={handleChange} required/><br />
          <input type="text" name="street" placeholder="Street" className="input" onChange={handleChange} required/><br />
          <input type="number" name="pincode" placeholder="Pincode" className="input" onChange={handleChange} required/><br />
          <textarea name="location" placeholder="Address" className="input1" onChange={handleChange} required></textarea><br />
          <button type="submit" className="input2">Submit</button>
          <button type="submit" className="input2" onClick={handleUpdate}>Update</button>
        </form>
      </div>
    </div>
  );
}
