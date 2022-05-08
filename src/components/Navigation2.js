import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navigation2.css";

//picture imports
import UCTESClogo from "../images/UCTESClogo.svg";
import videos from "../images/videos.svg";
import articles from "../images/articles.svg";
import team from "../images/team.svg";
import logout from "../images/logout.svg";
import menu from "../images/cheeseburger-menu.svg";


//context imports 
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';

function Navigation2() {

    let {logoutUser} = useContext(AuthContext);

  return (
    <div className="navigation">


    <div className = "UCTESClogo">
    <Link to ="/home"><img class = "UCTESClogo-img" src= {UCTESClogo} alt="..."/></Link>
    </div>

    <label htmlFor="toggle"><img class = "cheeseburger-menu" src={menu}  alt="..."/></label>
    <input type="checkbox" id = "toggle"/>

    <div className ="navigation-links">

        <div className = "navigation-link">
        <div><Link to ="/videos"><img className = "nav-link-img"src= {videos} alt="..."/></Link></div>
      
        
        </div>
        
        <div className = "navigation-link">
            <div><Link to ="/articles"><img className = "nav-link-img"src= {articles} alt="..."/></Link></div>
            
            
        </div>   

        <div className = "navigation-link">
            <div><Link to ="/team"><img className = "nav-link-img"src= {team} alt="..."/></Link></div>
            
        </div>

        <div className = "navigation-link" onClick = {logoutUser}>
            <div><Link to ="/logout"><img className = "nav-link-img"src= {logout} alt="..."/></Link></div>
            
        </div>
        
        
        <div>
    
        </div>
       

    </div>
</div>
  )
}

export default Navigation2; 
