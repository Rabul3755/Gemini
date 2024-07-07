import React from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="sidebar-menu">
        <nav>
          <ul>
            <li>
              <Link to="/about">
                <span>
                  <i className="fa-regular fa-address-card"></i>
                </span>{" "}
                About
              </Link>
            </li>
            <li>
              <Link to="/resume">
                {" "}
                <span>
                  <i className="fa-regular fa-file"></i>
                </span>{" "}
                Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span>
                  <i className="fa-solid fa-briefcase"></i>
                </span>{" "}
                Works
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <span>
                  <i className="fa-regular fa-address-book"></i>
                </span>{" "}
                Conatct
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
