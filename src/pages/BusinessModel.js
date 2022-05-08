import React from 'react';
import Navigation2 from "components/Navigation2";
import "../styles/BusinessModel.css";

function BusinessModel() {
  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
        <h1 className = "videosheader">How will your company make money?</h1>
            <div className = "videos-row">
                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_C-vGu2mL38" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>

                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DL6myRFdC_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>

                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PTg3RZPXgLg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>
            </div>
            

            <div className = "videos-row">
                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xZi4kTJG-LE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>

                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CEE-irUEOC8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>

                <div className = "video-area">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MN7yfV4UuCI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls webkitallowfullscreen = "true" mozallowfullscreen = "true" allowFullScreen></iframe>
                </div>
            </div>
        
            </div>
    </div>
  )
};

export default BusinessModel;