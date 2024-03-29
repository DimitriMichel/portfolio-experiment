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
            <motion.h2 className="box--title --experience">
              Experience
            </motion.h2>
            <motion.div
              variants={rotatingAnimation}
              initial="static"
              animate="rotating"
              transition="transition"
              className="box--title box__emoji"
              style={{ originY: 0.3 }}
            >
                <span role="img" aria-label="Hourglass Emoji">⏳</span>
            </motion.div>
          </div>
          <div className="timeline__container ">
            <div className="timeline">
              <div className="timeline__item --clearfix">
                <div className="timeline__icon"></div>
                <div className="timeline__content --right">
                  <span className="--date">Sept 2019 - May 2020 </span>

                  <div className="role">Analyst @ JOC Investments  </div>
                </div>
              </div>
              <div className="timeline__item --clearfix --item-two">
                <div className="timeline__icon"></div>
                <div className="timeline__content --left">
                  <span className="--date">May 2020 - July 2021</span>
                  <div className="role"> Web Dev @ JOC Investments </div>
                </div>
              </div>
                <div className="timeline__item --clearfix --item-two">
                    <div className="timeline__icon"></div>
                    <div className="timeline__content --right">
                        <span className="--date">July 2021 - July 2022</span>
                        <div className="role">Jr. Web Developer @ Stirling Brandworks</div>
                    </div>
                </div>
                <div className="timeline__item --clearfix --item-two">
                    <div className="timeline__icon"></div>
                    <div className="timeline__content --left">
                        <span className="--date">July 2022 - Current</span>
                        <div className="role">Software Engineer @<br/> Stirling Brandworks / Waypoint Interactive</div>
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
