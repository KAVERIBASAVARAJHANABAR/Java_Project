import React from "react";
import Contactimge from './contactimge.jpg';
import Indiagt from './indiagt.png';
import './Contact.css';
import Calling from './calling.png';
import Area from './area.png';

function Contact() {
    return (
        <>
            <div className='contact1'>
                <img src={Contactimge} alt='Contactimge' className="contactimg" />
                <h1>Got a question for us? Or a helpful suggestion, perhaps? </h1>
                <p><b>Fill out the form below and we’ll get back to you as soon as we can!</b></p>
                <div className="contactim">
                    <img src={Indiagt} alt="Indiagt" className="indiagt" />
                </div>
            </div>
            <h1 className="conthead">STATE OFFICES</h1>
    <div className="contact-divs-container">
      
      <div className="contact-div">
        <h2>West Bengal</h2>
        <p><img src={Area} alt='Area' className="area"/>26/1/1 First Floor<br/>
            Gariahat Road (South)<br/>
            Kolkata<br/>
            West Bengal – 700031</p>
        <p><img src={Calling} alt='Calling' className="calling"/>03324187600</p>
      </div>
      <div className="contact-div">
      <h2>Bihar</h2>
        <p><img src={Area} alt='Area' className="area"/>H/O Sri Ajit Kr. Jha<br/>
            Opposite Central Bank of India<br/>
            Ward 15, Sheohar<br/>
            Bihar – 843329</p>
        <p><img src={Calling} alt='Calling' className="calling"/>06222 257321</p>
      </div>
      <div className="contact-div">
      <h2>Maharashtra</h2>
        <p><img src={Area} alt='Area' className="area"/>Mune Layout, Near Saboo Mart<br/>
            Amravati Road, Khel Trimbak Narayan<br/>
            Post – Narayanpur, Achalpur<br/>
            Amravati Dist. Maharashtra – 444806</p>
        <p><img src={Calling} alt='Calling' className="calling"/>7083054567</p>
      </div>
      <div className="contact-div">
      <h2>Assam</h2>
        <p><img src={Area} alt='Area' className="area"/>H/O Mrs. Taru Choudhury,<br/>
            w/o Late Mahendra Choudhury,<br/>
            Residing at Village Uparhali.<br/>
            P.O. Bijoynagar,<br/>
            Near SBI Bank,<br/>
            behind Indian Oil Petrol Pump,<br/>
            Kamrup, Assam<br/>
            Pin – 781122</p>
        <p><img src={Calling} alt='Calling' className="calling"/>9874276749</p>
      </div>
      
      
      
    </div>

        </>
    );
}
export default Contact;