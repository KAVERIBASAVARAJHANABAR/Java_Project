import React from "react";
import "./Body.css";
import savewater from "./savewater.jpg";
import savewater1 from "./savewater1.jpg";
import savewater2 from "./savewater2.png";
import savewater3 from "./savewater3.jpg";

export default function Body() {
  return (
    <>
    <h2 align="center" >Exploring Clean Water and Sanitation: Informative Videos for Insight</h2>
    <div className="bodyflex">
    <div className="border123">
   <p> <a href="https://www.youtube.com/watch?v=dpaUBRl8c6A"><img src={savewater } alt="img" height="250px" width="330px"></img></a> <br/>
       Clean water and proper sanitation are fundamental to maintaining good health.
      Access to clean water for drinking and sanitation facilities for hygiene practices like handwashing helps prevent waterborne diseases such as diarrhea, cholera, and typhoid fever.
      </p>
    </div>
    <div className="border123">
      <p><a href="https://www.youtube.com/watch?v=YTIPokrtNQ0"><img src={savewater1 } alt="img" height="250px" width="330px"></img></a> <br/>
      Improved water and sanitation services reduce the transmission of diseases caused by water contamination, leading to lower morbidity and mortality rates, especially among children and vulnerable populations.
      </p>
    </div>
    <div className="border123">
      <p><a href="https://www.youtube.com/watch?v=qTX28qH5jT4"><img src={savewater2 } alt="img" height="250px" width="330px"></img></a> <br/>
      Access to clean water and sanitation facilities is essential for economic development and poverty reduction.
Improved health outcomes result in increased productivity as people spend less time being sick and more time working or attending school.
    </p>
    </div>
    <div className="border123">
      <p><a href="https://www.youtube.com/watch?v=7x2Ch-aMqEY"><img src={savewater3 } alt="img" height="250px" width="330px"></img></a> <br/>
      Proper sanitation practices, such as wastewater treatment and sewage disposal, protect the environment from pollution.
Contaminated water sources and inadequate sanitation can lead to environmental degradation and the pollution of rivers, lakes, and groundwater.
</p>
    </div>
    </div>



    <h1>Values</h1>
    <div className="text-divs-container">
      
      <div className="text-division">
        <h2>Collaboration</h2>
        <p>Emphasizing the importance of working together with various stakeholders such as governments, NGOs, communities, and businesses to address water and sanitation challenges effectively.</p>
      </div>
      <div className="text-division">
        <h2>Innovation</h2>
        <p>Encouraging the development and adoption of innovative solutions and technologies to improve access to clean water and sanitation facilities.</p>
      </div>
      <div className="text-division">
        <h2>Sustainability</h2>
        <p>Promoting practices that ensure the long-term availability and quality of water resources, as well as the durability of sanitation infrastructure.</p>
      </div>
      <div className="text-division">
        <h2>Equity</h2>
        <p> Ensuring that all individuals, regardless of their socio-economic status or geographic location, have access to safe and affordable water and sanitation services.</p>
      </div>
      <div className="text-division">
        <h2>Community Empowerment</h2>
        <p>Engaging and empowering local communities to participate in decision-making processes, take ownership of water and sanitation initiatives, and advocate for their rights to clean water and sanitation.</p>
      </div>
      <div className="text-division">
        <h2>Resilience</h2>
        <p> Building resilience to climate change, natural disasters, and other challenges that may impact water resources and sanitation infrastructure</p>
      </div>
    </div>
    </>
  );
}
