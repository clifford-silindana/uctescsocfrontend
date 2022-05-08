//react imports
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css import 
import "./App.css";

//page imports
import Login from "../src/pages/Login";
import Register from "pages/Register";
import Home from "../src/pages/Home";
import MyArticles from "pages/MyArticles";
import UserProfile from "pages/UserProfile";
import Team from "../src/pages/Team";
import Videos from "../src/pages/Videos";
import Articles from "../src/pages/Articles";
import CreateArticle from "./pages/CreateArticle"
import ArticleDetails from "./pages/ArticleDetails";
import EditArticle from "../src/pages/EditArticle";
import DeleteArticle from "../src/pages/DeleteArticle";

//inter-page imports
import BusinessModel from "../src/pages/BusinessModel";
import CompetitiveAnalysis from "pages/CompetitiveAnalysis";
import CustomerContent from "pages/CustomerContent";
import ElevatorPitch from "pages/ElevatorPitch";
import Funding from "pages/Funding";
import Introduction from "pages/Introduction";
import MarketResearch from "pages/MarketResearch";
import ProblemSlide from "pages/ProblemSlide";
import CEOSelection from "pages/CEOSelection";
import SolutionSlide from "pages/SolutionSlide";
import Traction from "../src/pages/Traction";
import ValueProposition from "pages/ValueProposition";

//utils imports
import PrivateRoute from "utils/PrivateRoute";

//context imports
import { AuthProvider } from "./context/AuthContext";



//</Routes><Route path = "/home" element = {<PrivateRoute><Home /></PrivateRoute>}></Route>
//made home not private


function App() {

  


  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path = "/" element = {<Login />}></Route>
            <Route path = "/register" element = {<Register />}></Route>            
            <Route path = "/home" element ={<Home />}></Route>            
            <Route path = "/myarticles" element = {<MyArticles />}></Route>            
            <Route path = "/team" element = {<Team />}></Route>
            <Route path = "/videos" element = {<Videos />}></Route>
            <Route path = "/articles" element = {<Articles />} ></Route>
            <Route path = "/articles/create/" element = {<CreateArticle />}></Route>
            <Route path = "/articles/details/:id" element = {<ArticleDetails />}></Route>
            <Route path = "/articles/edit/:id" element = {<EditArticle />}></Route>
            <Route path = "/articles/delete/:id" element = {<DeleteArticle />}></Route>
            <Route path = "/videos/business-model" element = {<BusinessModel />}></Route>
            <Route path = "/videos/competitive-analysis" element = {<CompetitiveAnalysis />}></Route>
            <Route path = "/videos/customer-content" element = {<CustomerContent />}></Route>
            <Route path = "/videos/elevator-pitch" element = {<ElevatorPitch />}></Route>
            <Route path = "/videos/funding" element = {<Funding />}></Route>
            <Route path = "/videos/introduction" element = {<Introduction />}></Route>
            <Route path = "/videos/market-research" element = {<MarketResearch />}></Route>
            <Route path = "/videos/problem-slide" element = {<ProblemSlide />}></Route>
            <Route path = "/videos/ceo-selection" element = {<CEOSelection />}></Route>
            <Route path = "/videos/solution-slide" element = {<SolutionSlide />}></Route>
            <Route path = "/videos/traction" element = {<Traction />}></Route>
            <Route path = "/videos/value-proposition" element = {<ValueProposition />}></Route>
            
          </Routes>
        </AuthProvider>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
