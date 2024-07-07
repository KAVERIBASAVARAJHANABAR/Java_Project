import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Compare.css'
// import './Ourproject.css';
import StatisticsChart from './StatisticsChart';
import ProjectView from './ProjectView';

export default function Compare() {
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [ourProjects, setOurProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcomingResponse, ourResponse] = await Promise.all([
          axios.get('http://localhost:8081/api/upcomingprojects'),
          axios.get('http://localhost:8081/ourwork/findalllocations')
        ]);
        setUpcomingProjects(upcomingResponse.data);
        setOurProjects(ourResponse.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare chart data
  const chartData = {
    labels: ['Projects'],
    datasets: [
      {
        label: 'Upcoming Projects',
        data: [upcomingProjects.length],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Our Projects',
        data: [ourProjects.length],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Upcoming Projects vs Our Projects',
      },
    },
  };

  return (
    <div className="project-comparison-view">
      <h1 className='compare'>Water Quality: Achieving Excellence in Our Water Bodies</h1>
      {error && <p>{error}</p>}
      <StatisticsChart data={chartData} options={chartOptions} />
      <ProjectView/>
    </div>
    
  );

  
}
