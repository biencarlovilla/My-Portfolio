import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
import "./style.css";

const Main = () => {
  return (
    <React.Fragment>
      <section id="portfolio">
        <div class="container">

            <h1><i class="chess knight icon"></i>Portfolio</h1>
            <div class="block"></div>
            
            <div class="row">
                <div class="six columns">

                    <div class="card">
                        <img src="images/covid-checker.png" class="card-img-top" alt="covid-fact-check" />
                        <div class="card-body">
                        <h5 class="card-title">COVID Fact Check</h5>
                        <p class="card-text">This project shows information about COVID around the world.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Deployed Link: <a href="https://biencarlovilla.github.io/factCheck/" class="card-link">https://biencarlovilla.github.io/factCheck/</a></li>
                        <li class="list-group-item">GitHub Repo:  <a href="https://github.com/biencarlovilla/factCheck/tree/homepage" class="card-link">https://github.com/biencarlovilla/factCheck/tree/homepage</a></li>
                        </ul>
                    </div>

                </div>

                <div class="six columns">
                    <div class="card">
                        <img src="images/work-day.png" class="card-img-top" alt="work-day-planner" />
                        <div class="card-body">
                        <h5 class="card-title">Work Day Dashboard</h5>
                        <p class="card-text">This project allows you to create your day schedule.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Deployed Link: <a href="https://biencarlovilla.github.io/Work-Day-Planner/" class="card-link">https://biencarlovilla.github.io/Work-Day-Planner/</a></li>
                        <li class="list-group-item">GitHub Repo: <a href="https://github.com/biencarlovilla/Work-Day-Planner" class="card-link">https://github.com/biencarlovilla/Work-Day-Planner</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
        <div class="six columns"> 

            <div class="card">
                <img src="images/views.png" class="card-img-top" alt="eat-da-burger" />
                <div class="card-body">
                  <h5 class="card-title">Eat-Da-Burger</h5>
                  <p class="card-text">Yumm </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Heroku Deployed Link: <a href="https://evening-dawn-64285.herokuapp.com/" class="card-link">https://evening-dawn-64285.herokuapp.com/</a></li>
                  <li class="list-group-item">GitHub Repo: <a href="https://github.com/biencarlovilla/Node-Express-Handlebars" class="card-link">https://github.com/biencarlovilla/Node-Express-Handlebars</a></li>
                </ul>
              </div>

        </div>
        <div class="six columns">
            
            <div class="card">
                <img src="images/weather-dash.png" class="card-img-top" alt="weather-dashboard" />
                <div class="card-body">
                  <h5 class="card-title">Weather Dashboard</h5>
                  <p class="card-text">This project shows information on weather on cities around usa</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Deployed Link: <a href="https://biencarlovilla.github.io/weather-dashboard/" class="card-link">https://biencarlovilla.github.io/weather-dashboard/</a></li>
                  <li class="list-group-item">GitHub Repo: <a href="https://github.com/biencarlovilla/weather-dashboard" class="card-link">https://github.com/biencarlovilla/weather-dashboard</a></li>
                </ul>
              </div>
        
        </div>
        
      </div>


        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;