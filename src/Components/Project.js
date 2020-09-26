import React from "react";
import * as PropTypes from "prop-types";

const Project = ({ imageSource, projectInfo, alt, launchFrom, github }) => {
  return (
    <div className="project-container">
      <div className="project">
        <img
          className="project__video"
          height="auto"
          width="100%"
          src={imageSource}
          alt={alt}
        />

        <div className="project__info text--subtitle">{projectInfo}</div>
        <div className="project__buttons">
          <a href={launchFrom}>
            <button className="project__button">Launch</button>
          </a>
          <a href={github}>
            <button className="project__button">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectInfo: PropTypes.string,
  alt: PropTypes.string,
};

export default Project;
