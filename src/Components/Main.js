import React from "react";
import ContactForm from "./ContactForm";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import BlogPost from "./BlogPost";
import Blog from "./Blog";
import { useInView } from "react-intersection-observer";
const Main = () => {
  //Play Animation Once In Viewport
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0,
  });
  return (
    <div className="main-container">
      <div className="skills__experience__container">
        <Skills />
        <Experience />
      </div>
      <ContactForm />
    </div>
  );
};

export default Main;
