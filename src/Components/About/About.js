import React from "react";
import portrait from "../../Assets/portrait.png";
import Pdf from "../../Assets/pdf_Villa_Resume.pdf";
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
                                <img src={portrait} alt="profile_portrait" height="350" width="285"/>
                            </div>
                        </Fade>
                        
                        <div class="eight columns">
                            <Fade delay={1000}>
                                <p><h2>Hello, I'm Biencarlo</h2>
                                <br />
                                    As an aspiring professional in the tech field, my ultimate goal is to be part of a respectable 
                                    company where I can utilize my skills and grow professionally while progressing in my career path.
                                    Having experience as a database administrator intern at Paypal, I was exposed to an effective working
                                    environment and building strong relationship with the team. After that, I wanted to further my education 
                                    by enrolling to UC Berkeley coding bootcamp focusing as a full flex web developer. 
                                </p>
                                <p>
                                    I'm confident I can apply the numerous skills I have acquired and be of great value. 
                                </p>

                                <a href={Pdf} target = "_blank" rel="noreferrer"><input class="button-primary" type="submit" value="Resume" /></a>

                            </Fade>

                        </div>

                        <Fade delay={1000}> 
                                <div class="row">
                                    <div class="skills-icons">
                                        <i class="code icon large"></i>
                                        <i class="html5 icon large"></i>
                                        <i class="css3 icon large"></i>
                                        <i class="js icon large"></i>
                                        <i class="node js icon large"></i>
                                        <i class="react icon large"></i>
                                        <i class="database icon large"></i>
                            
                                    </div>
                                </div>
                            </Fade>
                    
                    </div>

                {/* <div class="row">
                    <div class="three column">
                        <h1><i class="id badge outline icon large"></i></h1>
                    </div>
                </div> */}
                
                
            </div>
        </section>
      </React.Fragment>
    );
  };
  
  export default About;