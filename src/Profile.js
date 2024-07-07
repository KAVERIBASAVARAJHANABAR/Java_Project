import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile({ userEmail }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get(`http://localhost:8081/user/${userEmail}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userEmail]); // Trigger useEffect when userEmail changes

  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.first_name} {userData.last_name}</h1>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Address: {userData.street}, {userData.pincode}</p>
          <p>{userData.location}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
