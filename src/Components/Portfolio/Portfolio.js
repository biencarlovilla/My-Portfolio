import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
import googlebook from "../../Assets/googlebook.png";
import wheretogo from "../../Assets/wheretogo.png";
import futureendeavors from "../../Assets/futureendeavors.png";
import emp_dir from "../../Assets/emp_dir.png";
import theoffice from "../../Assets/theoffice.png";
import eatdaburger from "../../Assets/eatdaburger.png";
import workdaysched from "../../Assets/workdaysched.png";
import weatherdash from "../../Assets/weatherdash.png";
import notetaker from "../../Assets/notetaker.png";
import Fade from 'react-reveal/Fade';
import "./style.css";


const Portfolio = () => {
  return (
    <React.Fragment>
      <section id="portfolio">
        <div class="container">
            <Fade>
            <div>
            <h1><i class="chess knight icon"></i>Portfolio</h1>
            <div class="block"></div>
            </div>
            </Fade>

            <div class="row">
                <div class="four columns">
                    <Fade delay={200}>
                        <div>
                            <div class="card">
                                <img src={googlebook} alt="googlebook_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Google Book Search</h5>
                                <p class="card-text">For this project, I used react and generated an API key from google</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://team8googlesearch.herokuapp.com/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/google-book-search" class="card-link">Source Code</a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div class="four columns"> 
                    <Fade delay={400}>
                        <div>
                            <div class="card">
                                <img src={wheretogo} alt="wheretogo_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Where To Go</h5>
                                <p class="card-text">I collaborated with other developeres to build this project with Mern Stack </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://wheretogo2.herokuapp.com/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/MERN" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div class="four columns">
                    <Fade delay={600}>
                        <div>
                            <div class="card">
                                <img src={futureendeavors} alt="futureendeavors_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Future Endeavors</h5>
                                <p class="card-text">This project allows users to create an account and saves it to database</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://future-endeavorss.herokuapp.com/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Project-2-Future-Endeavors" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>    

            <br />

            <div class="row">
                <div class="four columns"> 
                    <Fade delay={200}>
                        <div>
                            <div class="card">
                                <img src={emp_dir} alt="emp_dir_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Employee Directory</h5>
                                <p class="card-text">For this project, I created an employee directory with React</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://biencarlovilla.github.io/Employee-Directory/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Employee-Directory" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div class="four columns">
                    <Fade delay={400}>
                        <div>
                            <div class="card">
                                <img src={theoffice} alt="theoffice_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Click Game</h5>
                                <p class="card-text">For this project, I created a click game using React</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://biencarlovilla.github.io/Click-Game/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Click-Game" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>    
                </div>
                <div class="four columns"> 
                    <Fade delay={600}>
                        <div>
                            <div class="card">
                                <img src={eatdaburger} alt="eatdaburger_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Eat Da Burger</h5>
                                <p class="card-text">I created an app that saves the user input in my local database </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://evening-dawn-64285.herokuapp.com/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Node-Express-Handlebars" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>   
                    </Fade>   
                </div> 
            </div>

            <br />
            
            <div class="row">
                <div class="four columns">
                    <Fade delay={200}>
                        <div>
                            <div class="card">
                                <img src={workdaysched} alt="workdaysched_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Work Day Dashboard</h5>
                                <p class="card-text">This project allows you to create your day schedule.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://biencarlovilla.github.io/Work-Day-Planner/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Work-Day-Planner" class="card-link">Source Code</a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div class="four columns">
                    <Fade delay={400}>
                        <div>
                            <div class="card">
                                <img src={weatherdash} alt="weatherdash_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">This project shows information on weather on cities around usa</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://biencarlovilla.github.io/weather-dashboard/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/weather-dashboard" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>    
                <div class="four columns">
                    <Fade delay={600}>
                        <div>
                            <div class="card">
                                <img src={notetaker} alt="notetaker_img" height="250" width="300"/>
                                <div class="card-body">
                                <h5 class="card-title">Note Taker</h5>
                                <p class="card-text">This project is about generating a note taker app that uses node, express.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="https://serene-temple-70979.herokuapp.com/" class="card-link">Demo</a></li>
                                <li class="list-group-item"><a href="https://github.com/biencarlovilla/Note-Taker-Git" class="card-link">Source Code </a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>    
                </div>        
            </div>


        </div>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;