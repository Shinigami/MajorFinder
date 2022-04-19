import React from 'react'
import {link} from "react-router-dom";

function Questions({user, BeginUser}) {
  const nextQuestionHandler = e => {
    e.preventDefault();
    BeginUser();
    
}

//    const testBank = [{"id":"625bdc2945d3ffcbb01de1f5","question":"Do you enjoy solving math problems?","answer":"I love solving math problems.","option1":"I dislike solving math problems.","option2":"I don't have an opinion on math problems.","option3":"Math is one of my weakest subjects.","major":"Mathematics","weight":5},{"id":"625bdd4d45d3ffcbb01de1f6","question":"Have you ever attempted coding?","answer":"I have coded before and am interested.","option1":"I have coded before and I didn't like it.","option2":"I don't have any interest with coding.","option3":"I have no knowledge of coding.","major":"Computer Science","weight":5},{"id":"625bdde745d3ffcbb01de1f7","question":"Have you ever wondered how objects you see are built?","answer":"Yes, I think of this all the time.","option1":"I'm not interested in how things are built.","option2":"I've had these thoughts before, but never paid them any attention.","option3":"I've never had these thoughts.","major":"Civil Engineering","weight":10},{"id":"625be03145d3ffcbb01de1f8","question":"How involved are you in politics?","answer":"I am very involved and care a great deal about it.","option1":"I sometimes pay attention to politics.","option2":"I know some political elements, but I couldn’t care for it.","option3":"I find politics very boring.","major":"Political Science","weight":10},{"id":"625be0c845d3ffcbb01de1f9","question":"How knowledgeable are you when it comes to technology?","answer":"I am always up to date with technology.","option1":"Technology doesn't play a huge role in my life.","option2":"I'm only aware of technology used by the general public.","option3":"I normally need help when it comes to technology problems.","major":"Computer Science","weight":15},{"id":"625c1c0fa67cddc78743c4d5","question":"Do you enjoy learning about human behavior and interactions throughout history?","answer":"I often question the reasoning behind human behavior and human interactions.","option1":"I have wondered the cause of human behavior before, but rarely.","option2":"I'm not very interested in human behavior.","option3":"I have no knowledge of the subject.","major":"Anthropology","weight":10},{"id":"625c207aa67cddc78743c4d7","question":"Are you interested in exploring other cultures in the world?","answer":"I often explore other cultures and learn their various practices and impacts.","option1":"I have been interested in another culture, but my interest doesn't go beyond this.","option2":"I'm not very interested in other cultures that don't affect me.","option3":"I only care about the people around me.","major":"International Studies","weight":10},{"id":"625c22c4a67cddc78743c4d8","question":"Do you enjoy learning about crime and its social, political, and legal influences?","answer":"I typically research into every crime and explore its details behind it.","option1":"I accept all of a crime's impacts, and I don't look into its details.","option2":"I sometimes care about the impacts of crime events, but I never research into them.","option3":"I don't have knowledge of any crime events.","major":"Criminology","weight":10},{"id":"625c2555a67cddc78743c4d9","question":"Do you enjoy storytelling/conveying interesting news to others?","answer":"I often write any form of stories, and may even dedicate time to doing so.","option1":"Sometimes I write story ideas, but I never follow through with them.","option2":"I've thought of writing stories/news, but never found the time to do so.","option3":"I don't typically write anything unless it is required for school.","major":"Journalism","weight":15},{"id":"625c292ca67cddc78743c4da","question":"How often would you say you feel inclined to comfort people through tough times?","answer":"I enjoy helping people work through their emotions.","option1":"I’ll do it if I have to, but I’d rather not.","option2":"I do not enjoy doing this for anybody.","option3":"I don't feel inclined unless it is someone I know.","major":"Psychology","weight":15},{"id":"625c2d41a67cddc78743c4db","question":"Do you enjoy learning about the physical Earth?","answer":"I often research the formations and natural processes of the Earth.","option1":"I’ve looked into the subject on my own, but just out of curiosity.","option2":"I never looked into it, but I enjoyed the topic in school.","option3":"I don't have any interest.","major":"Geology","weight":15},{"id":"625c2df5a67cddc78743c4dc","question":"Does learning about biological processes pique your interest?","answer":"I often research the topic of Biology and how it applies to all life on Earth.","option1":"I’ve looked into the subject on my own, but just out of curiosity.","option2":"I never looked into it, but I enjoyed the topic in school.","option3":"I don't have any interest in it.","major":"Biology","weight":15},{"id":"625c2e70a67cddc78743c4dd","question":"Do you enjoy learning how the brain works?","answer":"I often research the topic of how the brain works.","option1":"I’ve looked into the subject on my own, but just out of curiosity.","option2":"I never looked into it, but I enjoyed the topic in school.","option3":"I don't have any interest in it.","major":"Psychology","weight":5},{"id":"625c30fea67cddc78743c4e1","question":"Are you interested in legal systems?","answer":"I take special interest in them and how they function.","option1":"I’ve looked into them in school, but nothing more.","option2":"I plan to avoid dealing with them.","option3":"I don't have any interest in them.","major":"Criminology","weight":10},{"id":"625c3156a67cddc78743c4e2","question":"Do you enjoy public speaking or communicating ideas with others at a larger scale?","answer":"I always take the opportunity to speak in a group setting and/or in public.","option1":"I don't like speaking in front of people.","option2":"I don't like communicating ideas in fear of controversy.","option3":"I'm fine with public speaking only if I have to.","major":"Journalism","weight":10}]
     var currQuestion;

   var chA, chB, chC, chD;
   // if (user.q1 == "no") {
//   //   console.log("HORRA");
//   //     currQuestion = 0;
//   //     question.textContent = testBank[currQuestion].question;
//   // }
//    chA = document.getElementById("b1");
//  chB = document.getElementById("b2");
//  chC = document.getElementById("b3");
//  chD = document.getElementById("b4");
//  chA.style.display = 'block';
//      chB.style.display = 'block';
//      chC.style.display = 'block';
//      chD.style.display = 'block';
//  var question = document.getElementById("question");
 

// chA.style.width = 1000;

  return (
    <>
    <div class="intro" id="intro">MajorFinder Assessment</div>
    <div class="container">
      <div id="question-container" class="hide">
     <div id="question">Question</div>
        <div id="answer-buttons" class="btn-grid">
          <button class="btn" id="b1" onClick={nextQuestionHandler}>Answer 1</button>
          <button class="btn" id="b2"onClick={nextQuestionHandler}>Answer 2</button>
          <button class="btn" id="b3"onClick={nextQuestionHandler}>Answer 3</button>
          <button class="btn" id="b4"onClick={nextQuestionHandler}>Answer 4</button>
        </div>
      </div>
      <div class="controls">
        <button id="start-button" class="start-btn btn">Start</button>
        <button id="next-button" class="next-btn btn hide">Next</button>
      </div>
    </div>
    </>
  )
}

export default Questions