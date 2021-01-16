import React from "react";
import Fade from 'react-reveal/Fade';
import "./style.css";

const Skills = () => {
    return (
      <React.Fragment>
        <section id="skills">
            <div class="container">
                <Fade>
                    <div>
                        <h1><i class="chess bishop icon"></i>Skills</h1>
                        <div class="block"></div>
                    </div>
                </Fade>
                
                <div class="row">
                    <div class="skills-icons">

                        <i class="html5 icon large" alt="HTML5"></i>
                        <i class="css3 icon large"></i>
                        <i class="js icon large"></i>
                        <i class="node js icon large"></i>
                        <i class="npm icon large"></i>
                        <i class="react icon large"></i>
                        <i class="database icon large"></i>

                    </div>
                </div>

            </div>
        </section>
      </React.Fragment>
    );
  };
  
  export default Skills;