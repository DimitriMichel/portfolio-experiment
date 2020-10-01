import React from "react";
import ContactForm from "./ContactForm";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import BlogPost from "./BlogPost";
import Blog from "./Blog";
const Main = () => {
  return (
    <div className="main-container">
      <div className="skills__experience__container">
        <Skills />

        <Experience />
      </div>
      <Projects />
      <Blog />
      <ContactForm />
    </div>
  );
};

export default Main;
