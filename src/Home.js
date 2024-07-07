import React from "react";
import './Home.css';
import Body from './Body';
import Homeimg from './homeimge.png';


function Home(){
    return(
        <>
        <div className="container">
                <div className="heading">
                    <img src={Homeimg} alt='Homeimg' className="img5"></img>
                </div>
                <div className="box">
                    <h1>ASSURE EVERYONE'S ACCESS TO AND SUSTAINABLE MANAGEMENT OF WATER AND SANITATION.</h1>
                    <p>Sanitation and clean water are essential for sustainable development and public health. They promote hygiene, shield against watery illnesses, and enhance general health. Problems including water scarcity, pollution, and unequal access nevertheless exist despite their significance, especially in vulnerable groups. Disease prevention requires effective sanitation measures, such as appropriate waste disposal and clean facilities. In order to solve these issues and guarantee that everyone has access to clean water and sanitary facilities, coordinated actions are required to improve global health and prosperity.</p>
                </div>   
        </div>
        <Body/>
        
        </>
    );
}

export default Home;