import React from "react";
import { motion } from "framer-motion";

//Animation Config
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
const Experience = () => {
  return (
    <div className="box green">
      <div className="box__content__container">
        <div className="box--content green--pattern">
          <div className="box__header ">
            <motion.div className="box--title --experience">
              Experience{" "}
            </motion.div>
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
          <div className="timeline__container ">
            <div className="timeline">
              <div className="timeline__item --clearfix">
                <div className="timeline__icon"></div>
                <div className="timeline__content --right">
                  <span className="--date">Aug 2019-2020</span>

                  <div className="role">Scenester @ Wayfarers </div>
                </div>
              </div>
              <div className="timeline__item --clearfix --item-two">
                <div className="timeline__icon"></div>
                <div className="timeline__content --left">
                  <span className="--date">Jan 2020-Current</span>
                  <div className="role">Web Dev @ Sustainable Selfies </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
