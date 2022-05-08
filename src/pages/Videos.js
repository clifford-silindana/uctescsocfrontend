import React from 'react';
import Navigation2 from "components/Navigation2";
import { Link } from "react-router-dom";
import "../styles/Videos.css";

//image imports
import businessmodel from "../images/businessmodel.jpg";
import competition from "../images/competition.jpg";
import customersegments from "../images/customersegments.jpg";
import elevatorpitch from '../images/elevatorpitch.jpg';
import funding from "../images/funding.jpg";
import introduction from "../images/introduction.jpg";
import marketresearch from "../images/marketresearch.jpg";
import problem from "../images/problem.jpg";
import solution from "../images/solution.jpg";
import traction from "../images/traction.jpg";
import valueprop from "../images/valueprop.jpg";
import ceoselectionpic from "../images/ceoselection.webp"; 

function Videos() {
  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
        <div className = "page-text">
            <p className = "page-description">
                Take off for the Simulation Challenge with our learning resources &#128640;
            </p>
        </div>
        
            <div className = "videos-content">

                <div className = "videos-row">
                <div className = "video-type-section">
                <Link to = "/videos/introduction">
                    <img className = "video-thumbnail" src= {introduction} alt="thumbnail" />
                    <h2 className = "video-text">introduction</h2>
                    </Link>
                </div>

                <div className = "video-type-section">
                <Link to = "/videos/ceo-selection">
                    <img className = "video-thumbnail" src= {ceoselectionpic} alt="thumbnail" />
                    <h2 className = "video-text">ceo selection</h2>
                    </Link>
                </div>
            
            
            
                <div className = "video-type-section">
                <Link to = "/videos/problem-slide">
                    <img className = "video-thumbnail" src= {problem} alt="thumbnail" />
                    <h2 className = "video-text">problem slide</h2>
                </Link> 
                </div>
            

            
            

            </div>

            <div className = "videos-row">

            <div className = "video-type-section">
                <Link to = "/videos/solution-slide">
                    <img className = "video-thumbnail" src= {solution} alt="thumbnail" />
                    <h2 className = "video-text">solution slide</h2>
                </Link>
                </div>

            
                <div className = "video-type-section">
                <Link to = "/videos/business-model">
                    <img className = "video-thumbnail" src= {businessmodel} alt="thumbnail" />
                    <h2 className = "video-text">business model</h2>
                </Link>
                </div>
            

            
                <div className = "video-type-section">
                <Link to = "/videos/traction">
                    <img className = "video-thumbnail" src= {traction} alt="thumbnail" />
                    <h2 className = "video-text">traction</h2>
                </Link>  
                </div>
            

            
              
            

            </div>

            <div className = "videos-row">

            <div className = "video-type-section">
                <Link to = "/videos/market-research">
                    <img className = "video-thumbnail" src= {marketresearch} alt="thumbnail" />
                    <h2 className = "video-text">market research</h2>
                </Link>
                </div>

            
                <div className = "video-type-section">
                <Link to = "/videos/competitive-analysis">
                    <img className = "video-thumbnail" src= {competition} alt="thumbnail" />
                    <h2 className = "video-text">competitive analysis</h2>
                </Link>  
                </div>
            

            
                <div className = "video-type-section">
                <Link to = "/videos/customer-content">
                    <img className = "video-thumbnail" src= {customersegments} alt="thumbnail" />
                    <h2 className = "video-text">customer content</h2>
                </Link>
                </div>
            

            
              
            

            </div>

            <div className = "videos-row">

            <div className = "video-type-section">
                <Link to = "/videos/value-proposition">
                    <img className = "video-thumbnail" src= {valueprop} alt="thumbnail" />
                    <h2 className = "video-text">value proposition</h2>
                </Link>
                </div>

            
                <div className = "video-type-section">
                    <Link to = "/videos/elevator-pitch">
                    <img className = "video-thumbnail" src= {elevatorpitch} alt="thumbnail" />
                    <h2 className = "video-text">elevator pitch</h2>
                    </Link>
                </div>
            

            
                <div className = "video-type-section">
                <Link to = "/videos/funding">
                    <img className = "video-thumbnail" src= {funding} alt="thumbnail" />
                    <h2 className = "video-text">use of funds</h2>
                    </Link>
                </div>
            

            </div>
        
        </div>
        </div>
        
    </div>
  )
};

export default Videos;
