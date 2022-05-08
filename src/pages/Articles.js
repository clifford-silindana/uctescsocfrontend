import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navigation2 from "components/Navigation2";
import addition from "../images/addition.svg";
import "../styles/Articles.css";



function Articles() {

  const[articles, setArticles] = useState([]);
  



  useEffect(() => 
  {
    fetch("http://127.0.0.1:8000/api/articles/"). 
    then(response => response.json()). 
    then(data => setArticles(data))
  }, []);

  return (
    <div>    
        <Navigation2 />
        <div className = "body-section">

          <div className = "articles-heading">
            <h1 className = "heading"></h1>
          </div>

        <div className = "articles-section">
          <h1>Articles coming soon</h1>
             
        </div>
        </div>

    </div>);}


export default Articles;