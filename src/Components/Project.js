import React from "react";
import tideVideo from "../images/tide.mp4";
import * as PropTypes from "prop-types";



const Project = ({ videoSource, projectInfo }) => {

  return (
    <div className="project-container">
      <div className="project">
        <video className='project__video'
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          loop="loop"
          height="auto"
          width="100%"
          muted="muted"
        >
          <source src={videoSource} />
        </video>
        <div className="project__info text--subtitle">{projectInfo}</div>
        <div className="project__buttons">
          <button className='project__button'>Launch</button>
            <button className='project__button'>Code</button>

        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectInfo: PropTypes.string,
};

export default Project;
