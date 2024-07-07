import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Donate.css';
import Donation1 from './donation1.jpg';
import Donate3 from './donate3.jpg';
import Donate4 from './scanner.jpg';
export default function Donate() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [utr, setUtr] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState(''); // New state for the review input

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getDonations');
      const donationData = response.data.map(donation => ({
        email: donation.email,
        review: donation.reviews
      }));
      setReviews(donationData.filter(data => data.review)); // Filter out any null or empty reviews
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8081/addDonate', {
        email,
        phone_number: phoneNumber,
        upi_id: upiId,
        utr,
        reviews: reviewInput, // Use the single review input
        amount
      });
      console.log(response.data); // Assuming the response is a success message
      setMessage('Donation successful!');
      // Handle success, maybe show a success message to the user
      fetchReviews(); // Fetch reviews again after successful donation
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error making donation');
      // Handle error, show error message to the user
    }
  };

  return (
    <div>
      <img src={Donation1} alt='Donation1' className="donation1" />
      <div className='box'>
        <div className='box2'>
          <img src={Donate3} alt='Donate3' className="donate3" />
        </div>
        <div className='box1'>
          <h1>Online Donation</h1><br />
          <p>Please enter your email here.</p>
          <input type="email" placeholder="Enter the email" className="dee" onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
          <input type="tel" placeholder="Enter the Phonenumber" className="dee" onChange={(e) => setPhoneNumber(e.target.value)} /><br/><br/>
          <img src={Donate4} alt='Donate4'  /> <br/>
          <input type="text" placeholder="UPI ID" className="dee" onChange={(e) => setUpiId(e.target.value)} /> <br /> <br />
          <input type="text" placeholder="UTR" className="dee" onChange={(e) => setUtr(e.target.value)} /> <br /> <br />
          <input type="textarea" placeholder="Reviews" className="dee" onChange={(e) => setReviewInput(e.target.value)} /> <br /> <br />
          <div className="donation-section">
            <p>Donate Amount:</p>
            <input type="text" className="donation-input" onChange={(e) => setAmount(e.target.value)} /><br />
            {/* Add radio buttons here */}
          </div>
          <p>I would like you to use my donation for a certain project:</p>
          <button onClick={handleSubmit}>Submit</button>
          {message && <p>{message}</p>}
        </div>
      </div>
      <div className='reviews'>
        <p className='donatereview' align="center">REVIEWS</p>
        <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        {reviews.map((data, index) => (
          <div key={index}>
            <p><strong>{data.email}</strong></p>
            <p>{data.review}</p>
            <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );
}
