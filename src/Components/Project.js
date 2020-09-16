import React from "react";
import * as PropTypes from "prop-types";

const Project = ({ imageSource, projectInfo, alt }) => {
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
          <button className="project__button">Launch</button>
          <button className="project__button">Code</button>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  projectInfo: PropTypes.string,
  alt: PropTypes.string
};

export default Project;
