import React from "react";
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Twitter from './twitter.png';
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <h2>"Working Together for Cleaner Water and Better Sanitation: AquaUnity's Collaborative Efforts"</h2>
            <h1>Connect with Us</h1>
            <a href="https://www.facebook.com"><img src={Facebook} alt='Facebook'  className="img1"/></a>
            <a href="https://www.linkedin.com"><img src={Linkedin} alt='Linkedin'className="img1"/></a>
            <a href="https://www.instagram.com"><img src={Instagram} alt='Instagram'className="img1"/></a>
            <a href="https://www.twitter.com"><img src={Twitter} alt=' Twitter'className="img1"/></a>
          <p>
            © 2024 KLE tech University. All Rights Reserved. <br/>
            Powered By Computer Science and Engineering Department, <br/>
            KLE tech University Belagavi,Karnataka,India,PIN:590008 <br/>
            Site is best viewed in Chrome latest Version. 
          </p>
       </div>      
    );
}

export default Footer;