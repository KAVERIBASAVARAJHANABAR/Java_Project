import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Community.css";

export default function Community() {
  const [latestCampaign, setLatestCampaign] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const campaignResponse = await axios.get('http://localhost:8081/ourwork/latestcampaign');
        setLatestCampaign(campaignResponse.data);

        const usersResponse = await axios.get('http://localhost:8081/getAllUsers'); // Assuming an endpoint to fetch all registered users
        setRegisteredUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter registered users based on latest campaign's pincode and street
  const filteredUsers = registeredUsers.filter(user => {
    return user.pincode === latestCampaign?.pincode || user.street === latestCampaign?.street;
  });

  return (
    <div >
      <div className="community-page">

    
      {loading ? (
        <p>Loading...</p>
      ) : latestCampaign ? (
        <div>
          <h2>Latest Campaign</h2>
          <p className="commborder"><strong>Place:</strong> {latestCampaign.place}</p>
          <p className="commborder"><strong>Street:</strong> {latestCampaign.street}</p>
          {/* <p className="commborder"><strong>Street:</strong> {latestCampaign.street}</p> */}
          <p className="commborder"><strong>Pincode:</strong> {latestCampaign.pincode}</p>
          <p className="commborder"><strong>Date:</strong> {latestCampaign.date}</p>
        </div>
      ) : (
        <p>No campaigns found.</p>
      )}
        </div>
    <div className="community_details">
  <h1>Community Details</h1>
  
  <h3>Registered Users in Same Area</h3>
  {filteredUsers.length > 0 ? (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map(user => (
          <tr key={user.email}>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No registered users found in the same area as the latest campaign.</p>
  )}
</div>

    </div>
  );
}
