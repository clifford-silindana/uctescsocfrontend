import React, { useState } from 'react';
import Navigation2 from "components/Navigation2";

//import "../styles/CreatArticle.css";

function CreateArticle() {
  const [title, setTitle ] = useState("");
  const [author, setAuthor ] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e)
  {
    e.preventdefault();
    fetch("http://127.0.0.1:8000/api/articles/",
    )
  }
  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
  
      <h2>CreateArticle</h2>
      <form action="#">
        <label htmlFor="article-title"></label>
        <input id = "article-title" type="text" onChange = {(e) => setTitle(e.target.balue)}/>
        <label htmlFor="article-author">author</label>
        <input id = "article-author" type="text" onChange = {(e) => setAuthor(e.target.value)}/>
        <label htmlFor="article-body">write your article here...</label>
        <input type="textarea" onChange = {(e) => setBody(e.target.value)}/>
        <button id = "submit-btn" onSubmit = {handleSubmit}>submit</button>

      </form>
      </div>
    </div>
  )
};

export default CreateArticle;