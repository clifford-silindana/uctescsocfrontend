import React from "react";
import Navigation2 from "components/Navigation2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArticleDetails()


{
    const {id} = useParams();
    const [author, setAuthor] = useState("");
    const[body, setBody] = useState("");
    const[heading, setHeading] = useState("");


    useEffect(() => 
    {
      fetch("http://127.0.0.1:8000/api/articles/" + id). 
      then(response => response.json()). 
      then(data => {
        setAuthor(data.author);
          setBody(data.body);
          setHeading(data.title)
        })
      
    }, []);
 
    return(
        <div>
            <Navigation2 />
            <div className = "body-section">
    
            <h1>{heading}</h1>
             <p className = "article-body">{body}</p>
             </div>
        </div>
    );
}

export default ArticleDetails;