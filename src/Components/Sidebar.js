import React, { Fragment } from "react";
import {
  AiFillGithub,
  AiTwotoneMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__name_container">
            <p className="sidebar__name">Dimitri Pierre Louis </p>
          </div>
          <p className="info text--subtitle">
            Software Developer 📍 <span className="location">Boston, MA</span>
          </p>
          <div className="icons">
            <span>
              <AiTwotoneMail />
              <AiFillGithub />
              <AiFillTwitterCircle />
            </span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
