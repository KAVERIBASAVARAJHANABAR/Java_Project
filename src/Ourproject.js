import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ourproject.css';

export default function Ourproject() {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:8081/ourwork/findalllocations');
        setCampaigns(response.data);
      } catch (error) {
        setError('Error fetching campaigns');
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="ourproject">
      <h1>Campaigns List</h1>
      {error && <p>{error}</p>}
      <div className="campaign-list">
        {campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <div key={index} className="campaign-item">
              <h2>{campaign.place}</h2>
              <p><strong>Street:</strong> {campaign.street}</p>
              <p><strong>City:</strong> {campaign.city}</p>
              <p><strong>Pincode:</strong> {campaign.pincode}</p>
              <p><strong>Date:</strong> {campaign.date}</p>
          
            </div>
          ))
        ) : (
          <p>No campaigns available</p>
        )}
      </div>
    </div>
  );
}
