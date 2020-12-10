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

            <form>
                <div class="row">
                    <div class="six columns">
                        <label for="exampleRecipientInput">Name</label>
                        <br />
                        <input class="u-full-width" type="text" />
                    </div>
                    <div class="six columns">
                        <label for="exampleEmailInput">Email</label>
                        <br />
                        <input class="u-full-width" type="email" />
                    </div>
                </div>
                <div class="row">
                    <label for="exampleMessage">Message</label>
                    <br />
                    <textarea class="u-full-width"></textarea>
                    <br />
                    <input class="button-primary" type="submit" value="Submit" />
                </div>
            </form>

        </div>
     </section>
    </React.Fragment>
  );
};

export default Contact;