import React from 'react';
import Aboutimg from './aboutimg2.png';
import './About.css';
import Dee from './dee.jpg';

function About() {
  return (
    <div>
      <img src={Aboutimg} alt='Aboutimg'className="img3"></img>
      <p className='aboutpara'>
        At AquaUnity, our mission is to forge collaborative efforts aimed at delivering innovative and sustainable solutions for clean water and sanitation. Through technology, community engagement, and strategic partnerships, we strive to ensure universal access to safe water and sanitation, leaving no one behind. We envision a world where every individual enjoys equitable access to clean water and sanitation facilities, irrespective of their background or location. Our vision encompasses the eradication of waterborne diseases, the promotion of environmental sustainability, and the empowerment of communities to flourish with dignity and health at the forefront.
      </p>
     
      <div className="text-divs-containers">
        <h1>Meet the Team</h1>
        <p className='aboutparas'>Our work would be impossible without the dedicated volunteers who work tirelessly to make our vision of a world without water scarcity a reality. </p>
        <div className="text-divi">
          <h2>Kaveri</h2>
          <img src={Dee} alt='Dee' className="img4"></img>
        </div>
        <div className="text-divi">
          <h2>Deepa</h2>
          <img src={Dee} alt='Dee' className="img4"></img>
        </div>
        <div className="text-divi">
          <h2>Sneha</h2>
          <img src={Dee} alt='Dee' className="img4"></img>
        </div>
      </div>
      <div>
        <h1>Goals</h1>
        <p className='aboutpara'>
          <ul>
            
        <li>Develop innovative technologies and solutions for clean water and sanitation, focusing on affordability, scalability, and sustainability.</li>
        <li>Foster partnerships with governments, NGOs, corporations, and local communities to maximize the impact of our initiatives.</li>
        <li>Implement community-driven projects that address specific water and sanitation challenges, tailored to local needs and contexts.</li>
        <li>Advocate for policy changes and investments that prioritize clean water and sanitation as fundamental human rights.</li>
        <li>Conduct research and data analysis to continuously improve our understanding of water-related issues and inform evidence-based interventions.</li>
        <li>Promote education and awareness campaigns to empower individuals and communities to take ownership of water and sanitation management.</li>
        <li>Expand access to clean water and sanitation services in underserved and marginalized areas, prioritizing equity and social justice.</li>
        <li>Monitor and evaluate the effectiveness of our programs, ensuring accountability and transparency in our operations.</li>
        <li>Support capacity building and skill development initiatives to enhance local capabilities in water and sanitation management.</li>
        <li>Contribute to global efforts towards achieving the Sustainable Development Goals related to clean water and sanitation (SDG 6).</li>
        </ul>
        </p>
      </div>
    </div>
  );
}

export default About;
