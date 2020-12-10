import React from "react";
import portrait from "../../Assets/portrait.png";
import "./style.css";

const About = () => {
    return (
      <React.Fragment>
<section id="about">
<div class="container">
    <div>
        <h1><i class="chess king icon"></i>About</h1>
        <div class="block"></div>
    </div>

    <div class="row">
        
    <div class="four columns">
        <img src={portrait} alt="profile_portrait" height="300" width="255"/>
    </div>

    <div class="seven columns">
        <p id="hello">Hello, I'm Biencarlo</p>
        <p> As an aspiring professional in the tech field, my goal is to get a job in a company where I can utilize my 
            skills and improve my career path. Coming from a financial company, I was able to further my knowledge and 
            expose myself on a day to day basis of an effective working environment. I’m confident that I can apply 
            these experiences and be valuable to a company. I grew up in the Philippines and I've 
            been living in the Bay Area. Some fun facts about me is that I play chess. </p>
        <i class="far fa-file-pdf file alternate icon large"></i><a href="./documents/Villa_Resume.pdf" target="_blank">Biencarlo's Resume </a>
    </div>

    </div>
    
</div>
</section>
      </React.Fragment>
    );
  };
  
  export default About;