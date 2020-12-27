import React from "react";
// import portfolio from "../../utils/portfolio.png";
// import { Typography } from "@material-ui/core";
import "./style.css";

const Contact = () => {
  return (
    <React.Fragment>
     <section id="contact">
        <div class="container"> 
            <h1><i class="chess icon"></i>Contact</h1>
            <div class="block"></div>

            
                <div class="row">
                <a href="mailto:biencarlovilla@gmail.com"><input class="button-primary" type="submit" value="Let's Connect!" /></a>
                </div>
                
                <div>
                <a href="https://github.com/biencarlovilla"><i class="github icon large"></i></a>
        
                <a href="https://www.linkedin.com/in/biencarlo-villa/"><i class="linkedin icon large"></i></a>

                <a href="https://www.instagram.com/biencarlovilla/"><i class="instagram icon large"></i></a>
                </div>


        </div>
     </section>
    </React.Fragment>
  );
};

export default Contact;