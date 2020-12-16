import React from "react";
import portrait from "../../Assets/portrait.png";
import Fade from 'react-reveal/Fade';
import "./style.css";

const About = () => {
    return (
      <React.Fragment>
<section id="about">
<div class="container">
    <Fade>
    <div>
        <h1><i class="chess king icon"></i>About</h1>
        <div class="block"></div>
    </div>
    </Fade>
    <div class="row">
    <Fade delay={600}>
    <div class="four columns">
        <img src={portrait} alt="profile_portrait" height="300" width="255"/>
    </div>
    </Fade>
    
    <div class="eight columns">
    <Fade delay={1000}>
        <p><h2>Hello, I'm Biencarlo</h2>
            <br />
            As an aspiring professional in the tech field, my goal is to get a job in a company where I can utilize my 
            skills and improve my career path. Coming from a financial company, I was able to further my knowledge and 
            expose myself on a day to day basis of an effective working environment. I’m confident that I can apply 
            these experiences and be valuable to a company. I grew up in the Philippines and I've 
            been living in the Bay Area. Some fun facts about me is that I play chess. </p>

        <a href="./documents/Villa_Resume.pdf"><i class="file alternate icon large"></i> </a>

        <a href="https://github.com/biencarlovilla"><i class="github icon large"></i></a>
        
        <a href="https://www.linkedin.com/in/biencarlo-villa/"><i class="linkedin icon large"></i></a>
        
        <a href="https://www.instagram.com/biencarlovilla/"><i class="instagram icon large"></i></a>
       
        <a href="mailto:biencarlovilla@gmail.com"><i class="envelope icon large"></i></a>
        </Fade>
    </div>
    
    </div>

    <div class="row">
        <div class="three column">
            <h1><i class="id badge outline icon large"></i></h1>
        </div>
    </div>
    
    
</div>
</section>
      </React.Fragment>
    );
  };
  
  export default About;