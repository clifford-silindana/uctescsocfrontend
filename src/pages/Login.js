import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import "../styles/Login.css";
import UCTNight from "../images/UCTNight.jpg";
import UCTESClogo2 from "../images/UCTESClogo2.svg";
import AuthContext from 'context/AuthContext';
import UserProfile from './UserProfile';

function Login() {

  let {LoginUser} = useContext(AuthContext);
 

  return (
    <div className = "login-page">
        <img className = "login-bg-img" src= {UCTNight} alt="" />
        <form id = "login-form" onSubmit={LoginUser} action="#">
            <input id = "student-number" className = "input-field" type="text" placeholder='student number' name = "studentNumber"/>
            <input id = "password" className = "input-field" type="password" placeholder='password' name = "password"/>
            <Link to = "/home"><button id = "login-btn">log in</button></Link>
            <p className = "register-text">No account?<Link to ="/register"> Register</Link> &#128522;</p>
        </form>

       
        <img className = "UCTESClogo2" src= {UCTESClogo2} alt="" />
    </div>
  )
};

export default Login;