import AuthContext from 'context/AuthContext';
import React from 'react'
import { useState, useEffect, useContext } from "react";
import Navigation2 from "components/Navigation2";

function MyArticles() {

    let [articles, setArticles ] = useState([]);
    let {authTokens, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        getUserArticles();

    }, []);

    let getUserArticles = async ()=> {
         let response = await fetch("http://127.0.0.1:8000/api/user_articles/",
         {"method" : "GET",
        "headers" : {"Content-Type" : "application/json", "Authorization" : "Bearer " + String(authTokens.access)}
            }
         )
         let data = await response.json();
         let data_as_array = Array.from(data);

         if (response.status === 200)
         {
            setArticles(data_as_array);
         }

         else if(response.statusText === "Unauthorized")
         {
            logoutUser();
         }
         
          

    }

  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
        <p>Welcome to your notes</p>

        <ul>
            {articles.map(article => (
                <li key = {article.id}>{article.body}</li>
            ))}
        </ul>
        </div>

    </div>
  )
}

export default MyArticles;