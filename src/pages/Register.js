import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Register() {
  const [name ,setName ] = useState("");
  const [surname ,setSurname ] = useState("");
  const [userName ,setUserName ] = useState("");
  const [course_of_study ,setCourse ] = useState("");
  const [email ,setEmail ] = useState("");
  const [password ,setPassword ] = useState("");
  let navigate = useNavigate();

  let submit = async (e) =>
  {
    e.preventDefault();
    
    let response = await fetch("http://127.0.0.1:8000/api/register/",
    {method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({"name" : name, "surname" : surname, "username" : userName, "course_of_study" : course_of_study, "email" : email, "password" : password})
    })

    if (response.status === 200) 
    {
        navigate("/");
    }

    else
    {
        alert("Something went wrong. Please check your credentials.");
    }
  };

  return (
    <div>
        <form id = "login-form" onSubmit={submit} action="#">
          <input id = "name" className = "input-field" type="text" placeholder='name' name = "name" onChange = {e => setName(e.target.value) }/>
          <input id = "surname" className = "input-field" type="text" placeholder='surname' name = "surname" onChange = {e => setSurname(e.target.value)}/>
          <input id = "student_number" className = "input-field" type="text" placeholder='student number' name = "student_number" onChange = {e => setUserName(e.target.value)}/>
          <input id = "course_of_study" className = "input-field" type="text" placeholder='course of study' name = "course_of_study" onChange = {e => setCourse(e.target.value)}/>
          <input id = "email" className = "input-field" type="text" placeholder='email address' name = "email" onChange = {e => setEmail(e.target.value)}/>
          <input id = "password" className = "input-field" type="password" placeholder='password' name = "password" onChange = {e => setPassword(e.target.value)}/>
            <button id = "register-btn">register</button>
            
        </form>
    </div>
  )
}

export default Register;