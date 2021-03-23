import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
//Logos
import reactLogo from "../images/react.svg";
import javascriptLogo from "../images/javascript.svg";
import nextLogo from "../images/next-js.svg";
import firebaseLogo from "../images/firebase.svg";
import jestLogo from "../images/jest.svg";
import sassLogo from "../images/sass.svg";
import nodeLogo from "../images/nodejs.svg";

//Animation Config
const yFloatingAnimation = {
  static: { y: 0 },
  floating: {
    y: [-3, -10],
    transition: {
      duration: 1.3,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const Skills = () => {
  return (
    <div className="box blue">
      <div className="box--content blue--pattern skills">
        <div className="box__header">
          <motion.h2 className="box--title">Skills </motion.h2>
          <motion.div
            variants={yFloatingAnimation}
            initial="static"
            animate="floating"
            transition="transition"
            className="box--title box__emoji"
          >
            <span role="img" aria-label="Hammer Emoji"> 🔨</span>
          </motion.div>
        </div>
        <div className="logos__container">
          <div className="logos">
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="React"
              alt='React Logo'
              className="skills__logo"
              src={reactLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="Javascript"
              alt='Javascript Logo'
              className="skills__logo"
              src={javascriptLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="NextJS"
              alt='Next JS Logo'
              className="skills__logo"
              src={nextLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="Firebase"
              alt='Firebase Logo'
              className="skills__logo"
              src={firebaseLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="Jest"
              alt='Jest Logo'
              className="skills__logo"
              src={jestLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="Sass"
              alt='Sass Logo'
              className="skills__logo"
              src={sassLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
            <motion.img
              whileHover={{ scale: 1.2 }}
              data-tip="Node"
              alt='Node Logo'
              className="skills__logo"
              src={nodeLogo}
            />
            <ReactTooltip backgroundColor="white" textColor="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
