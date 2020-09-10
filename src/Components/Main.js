import React from "react";
import { motion } from "framer-motion";

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
}; //rotate: -90
const rotatingAnimation = {
  static: { y: 0 },
  rotating: {
    rotate: [0, 0, 360, 360, 0, 0],
    transition: {
      duration: 10,
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
  return (
    <div className="main-container">
      <div className="box  box--green">
        <div className="box--content">
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
        </div>
      </div>
      <div className="box box--blue ">
        <div className="box__content__container">
          <div className="box--content green--pattern ">
            <div className="box__header">
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
            <div className="timeline"> </div>
          </div>
        </div>
      </div>
      <div className="box box--blue box__projects">
        <div className="box__content__container">
          <div className="box--content coral--pattern ">
            <div className="box__header">
              <motion.div className="box--title">Projects </motion.div>
              <motion.div
                variants={opacityAnimation}
                initial="static"
                animate="visible"
                transition="transition"
                className="box--title box__emoji"
              >
                👷🏾‍♂️
              </motion.div>
            </div>
            <div className="timeline"> </div>
          </div>
        </div>
      </div>
      <div className="contact">Hello</div>
    </div>
  );
};

export default Main;
