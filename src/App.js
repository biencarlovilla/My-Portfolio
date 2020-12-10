import React, { Component } from "react";
// import ScrollableTabsButtonForce from "./components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
// import Experience from "./components/Experience/Experience";
// import Skill from "./components/Skill/Skill";
// import ContactForm from "./components/Contact/Contact";
import "./App.css";
// import Section from "./components/Section/Section.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ScrollableTabsButtonForce />
        <Section> */}
          <Main />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        {/* </Section> */}
      </React.Fragment>
    );
  }
}

export default App;