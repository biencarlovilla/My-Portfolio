import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
import "./style.css";

const Main = () => {
  return (
    <React.Fragment>
      {/* <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      > */}
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      {/* </Typography> */}
      <div className="name">
        {/* <img src={portfolio} alt="profile_photo" className="img" /> */}
        <h1>Biencarlo Villa</h1>
        <div className="subtitle">
          <h3>Full Stack Web Developer</h3>
        
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;