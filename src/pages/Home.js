import React, { useContext }from 'react';
import Navigation2 from "components/Navigation2";
import AuthContext from 'context/AuthContext';
import { Link } from "react-router-dom";
import home1 from "../images/home1.jpg";
import leopardslair from "../images/leopardslair.jpg";
import womeninbusiness from "../images/womeninbusiness.jpg";
import businessletter from "../images/businessletter.jpg";
import "../styles/Home.css";



function Home() {

  let {user} = useContext(AuthContext);
  
  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
       { user && <p>Hello {user.username}</p>}
 
       <div className = "section">
      
        <div className = "section-text">
         <h1>Simulation Challenge</h1>
         <p>Take your ground-breaking idea and turn it into a business with us <a className = "section-link2" href = {"https://www.instagram.com/uctentrepreneursoc/"} target = "_blank">here</a></p>
        </div>
    
        <img className = "section-img" src = {home1}></img>
      
       </div>
       
       <div className = "section">
        <div className = "section-text">
          <h1>Women In Entrepreneurship</h1>
          <p>We empower women to make their entrepreneurial dreams a reality. <a className = "section-link2" href = {"https://www.instagram.com/uctentrepreneursoc/" } target = "_blank">Read more</a></p>
        </div>
        <img className = "section-img" src = {womeninbusiness}></img>
       </div>

       <div className = "section">
        <div className = "section-text">
          <h1>Our Newsletter</h1>
          <p>See and diarise our upcoming events in our <a className = "section-link2" href = {"https://www.instagram.com/uctentrepreneursoc/"} target = "_blank">monthly newsletter</a></p>
        </div>
        <img className = "section-img" src = {businessletter}></img>
        
       </div>
  
       <div className = "section">
      
         <div className = "section-text">
         <h1>Leopard's Lair</h1>
         <p>Pitch your business idea <a className = "section-link2" href = {"https://www.instagram.com/uctentrepreneursoc/"} target = "_blank">here</a> and stand a chance to win R250 000 worth of venture funding.</p>

         </div>
        <img className = "section-img" src = {leopardslair}></img>
     
       </div>
       
       </div>
       
    </div>
  )
};

export default Home;