
import './App.css';
import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './components/Questions';
import { render } from '@testing-library/react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

function App() {
  const adminUser = {
    email: "alex@alex.com",
    password: "alex"
  }
  const [user,setUser] = useState({name: "", email: "", began: "no"});
  const[error,setError] = useState("");
  const LoginUser = details=> {
    console.log(details);
    if (details.email === adminUser.email && details.password ===adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        began: "no"
      
      });
    }
    else {
      console.log("Login Failed.");
    }
  }
  const LogoutUser = () => {
    console.log("logout");
    setUser({name:"",email:"",began:"no"});
  }
  const BeginUser = () => {
    console.log("user clicked begin");
    setUser({name: user.name, email: user.email,began: "yes"});
  }
 function makeGetRequest(path) {
   axios.get(path).then(
    (response) => {
      var result = response.data;
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
   );
  }
  let authority;


    if (user.email != "" && user.began == "no") {
      authority = <HomePage LoginUser = {LoginUser} error = {error} LogoutUser = {LogoutUser} user = {user} BeginUser = {BeginUser}/>
    }
    else {
      authority = <LoginForm LoginUser = {LoginUser} error={error}/>
    }

    if (user.began == "yes") {
      authority = <Questions/>
      render();
    }

  return (
    
    <div className="App">
      {authority}
    </div>
  );
}

export default App;
