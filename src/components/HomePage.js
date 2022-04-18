import React, {useState} from 'react'
import App from '../App'
import Questions from './Questions'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {Link} from "react-router-dom"
import { render } from '@testing-library/react';


function HomePage({LogoutUser,error, user, BeginUser}) {
    console.log(user.began);
    let nextStep;
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    const BeginHandler = e => {
      e.preventDefault();
      BeginUser();
  }
    
        
    

  return (

    <div className='HomePage'>
        {(user.began == "yes") ? (
            <Questions/>) :
            (<div classname="home">
            <h2> Welcome, <span>{user.name}</span></h2>
    
            <h1>Press Below to begin assesment!</h1>
            <button type = "begin" onClick={BeginHandler}>Begin!</button>
            <div></div>
            <button type = "Logout" onClick={LogoutUser}>Logout</button>
            <div></div>
          </div>)}
    </div>
    
  )
}

export default HomePage