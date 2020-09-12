import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import ReactTooltip from "react-tooltip";
//Logos
import reactLogo from "../images/react.svg";
import javascriptLogo from "../images/javascript.svg";
import nextLogo from "../images/next-js.svg";
import firebaseLogo from "../images/firebase.svg";
import sassLogo from "../images/sass.svg";
import nodeLogo from "../images/nodejs.svg";
import jestLogo from "../images/jest.svg";

//Animation Variants
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
const rotatingAnimation = {
  static: { y: 0 },
  rotating: {
    rotate: [0, 0, 360, 360, 0, 0],
    transition: {
      duration: 7,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const opacityAnimation = {
  static: { opacity: 0, y: 10 },
  visible: {
    y: -3,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Main = () => {
  //Play Animation Once In Viewport
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="main-container">
      <div className="skills__experience__container">
        <div className="box blue">
          <div className="box--content blue--pattern">
            <div className="box__header">
              <motion.div className="box--title">Skills </motion.div>
              <motion.div
                variants={yFloatingAnimation}
                initial="static"
                animate="floating"
                transition="transition"
                className="box--title box__emoji"
              >
                🔨
              </motion.div>
            </div>
            <div className="logos">
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="React"
                className="skills__logo"
                src={reactLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="Javascript"
                className="skills__logo"
                src={javascriptLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="NextJS"
                className="skills__logo"
                src={nextLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="Firebase"
                className="skills__logo"
                src={firebaseLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="Jest"
                className="skills__logo"
                src={jestLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="Sass"
                className="skills__logo"
                src={sassLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
              <motion.img
                whileHover={{ scale: 1.2 }}
                data-tip="Node"
                className="skills__logo"
                src={nodeLogo}
              />
              <ReactTooltip backgroundColor="white" textColor="black" />
            </div>
          </div>
        </div>
        <div className="box green ">
          <div className="box__content__container">
            <div className="box--content green--pattern">
              <div className="box__header ">
                <motion.div className="box--title">Experience </motion.div>
                <motion.div
                  variants={rotatingAnimation}
                  initial="static"
                  animate="rotating"
                  transition="transition"
                  className="box--title box__emoji"
                >
                  ⏳
                </motion.div>
              </div>
              <div className="timeline">
                <div className="timeline__item --clearfix">
                  <div className="timeline__icon"></div>
                  <div className="timeline__content --right">
                    2019-2012
                    <div>2019-2012</div>
                    <div>2019-2012</div>
                    <div>2019-2012</div>
                  </div>
                </div>
              </div>
              <div className="timeline__item --clearfix">
                <div className="timeline__icon"></div>
                <div className="timeline__content --left">2019-2012</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box--blue box__projects">
        <div className=" box__content__container">
          <div className="box--content yellow--pattern ">
            <div className="box__header">
              <motion.div ref={ref} className="box--title">
                Projects{" "}
              </motion.div>
              {inView ? (
                <motion.div
                  variants={opacityAnimation}
                  initial="static"
                  animate="visible"
                  transition="transition"
                  className="box--title box__emoji"
                >
                  👷🏾‍♂️
                </motion.div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="contact pink--pattern">
        <div className="form__container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Main;
