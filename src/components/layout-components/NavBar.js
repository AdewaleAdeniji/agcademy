/* eslint-disable */
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Zoom, Bounce } from "react-reveal";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="topnav desktop">
        <Link to="/">
        <img src={require("../../assets/logo.svg")} alt="Agcademy Logo" />
        </Link>
        <div className="nav-links">
          <ul>
            <li>
              <a className="active">About</a>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>Instructor</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a className="act-button">Signup</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-mobile mobile">
        <img src={require("../../assets/logo.png")} alt="Agcademy Logo" />
        <Bounce>
        <img
          src={require("../../assets/menu.svg")}
          alt="Agcademy Menu Button"
          onClick={() => setOpen(true)}
        />
        </Bounce>
      </div>
      {open && (
        <Zoom>
        <div className="nav-overlay">
          <button className="closenav" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
          <div className="nav-content">
            <ul>
              <li>
                <a className="active">About</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Instructor</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <button className="act-button">Signup</button>
              </li>
            </ul>
          </div>
          <img
            src={require("../../assets/logo-white.svg")}
            alt="Agcademy Logo"
            className="nav-logo-float"
          />
        </div>
        </Zoom>
      )}
    </>
  );
};
export default NavBar;
