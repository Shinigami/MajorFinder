import React from 'react'
import {link} from "react-router-dom";
//import Assessmentservice from '../services/assessment.service';
import App from '../App';
import makeGetRequest from '../App'
import axios from 'axios';

function Questions() {
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
  console.log("THIS IS THE PROBLEM");
 makeGetRequest("http://localhost:8080/api/assessment");
  

  return (
    <h1>questions</h1>
  )
}

export default Questions;