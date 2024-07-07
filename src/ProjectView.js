import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ourproject.css';

export default function ProjectView() {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        console.log('Fetching campaigns...');
        const response = await axios.get('http://localhost:8081/api/upcomingprojects');
        console.log('Response:', response.data);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setError('Error fetching campaigns');
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="ourproject">
      <h1>Upcoming Compaigns</h1>
      {error && <p>{error}</p>}
      <div className="campaign-list">
        {campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <div key={index} className="campaign-item">
              <h2>{campaign.title}</h2>
              <p><strong>Description:</strong> {campaign.description}</p>
              <p><strong>Location:</strong> {campaign.location}</p>
              <p><strong>Start Date:</strong> {campaign.startDate}</p>
              <p><strong>End Date:</strong> {campaign.endDate}</p>
            </div>
          ))
        ) : (
          <p>No campaigns available</p>
        )}
      </div>
    </div>
  );
}
