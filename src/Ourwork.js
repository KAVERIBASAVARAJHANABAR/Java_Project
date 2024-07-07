import React, { useState } from "react";
import axios from 'axios';
import "./Ourwork.css";

const Ourwork = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'kletech' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleSubmitCampaign = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/saveupcoming', {
        title,
        description,
        location,
        startDate,
        endDate
      });
      console.log(response.data); // Assuming the response is a success message
      setMessage('Campaign saved successfully!');
      clearCampaignForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error saving campaign');
    }
  };

  const handleSubmitLocation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/ourwork/savelocations', {
        place,
        street,
        city,
        pincode,
        date
      });
      console.log(response.data); // Assuming the response is a success message
      setMessage('Location saved successfully!');
      clearLocationForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error saving location');
    }
  };

  const clearCampaignForm = () => {
    setTitle('');
    setDescription('');
    setLocation('');
    setStartDate('');
    setEndDate('');
  };

  const clearLocationForm = () => {
    setPlace('');
    setStreet('');
    setCity('');
    setPincode('');
    setDate('');
  };

  return (
    <div className="ourpage">
      <h1>UPCOMING CAMPAIGNS</h1>
      <div className="container9999">
        <div className="text-our">
          {loggedIn ? (
            <div>
              <h2>Add Upcoming Campaign</h2>
              <form onSubmit={handleSubmitCampaign} className="text-street">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="date"
                  placeholder="Start Date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="date"
                  placeholder="End Date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <button type="submit">Submit Campaign</button>
              </form>
              <br />
              <h2>Present Campaign</h2>
              <form onSubmit={handleSubmitLocation} className="text-street">
                <input
                  type="text"
                  placeholder="Water Body"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="City"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="State"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="number"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="street"
                  required
                />
                <br />
                <button type="submit">Submit Location</button>
              </form>
              {message && <p>{message}</p>}
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="management-login-form">
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                className="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /> <br/>
              <input
                type="password"
                placeholder="Password"
                className="admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /> <br/>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
