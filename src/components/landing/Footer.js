/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="foot-links">
          <div className="mb-only">
            <h5>agcademy</h5>
            <img src={require("../../assets/Sitting.svg")} alt="Footer" />
          </div>
        </div>
        <div className="foot-links">
          <div className="desk-only">
            <h5>agcademy</h5>
            <img src={require("../../assets/Sitting.svg")} alt="Footer" />
          </div>
          <div>
            <h6>Products</h6>
            <a>Courses</a>
            <a>Live Events</a>
            <a>Resource Kits</a>
            <a>Instructor Guides</a>
          </div>
          <div>
            <h6>Company</h6>
            <a>About Us</a>
            <a>Our Culture</a>
            <a>FAQs</a>
            <a>Blog</a>
          </div>
        </div>
        <div className="foot-links-two">
          <h6>&copy; agcademy.com 2022</h6>
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
        </div>
      </div>
      <div className="footer-desc">
        <div className="img-footer">
          <img
            src={require("../../assets/logo-white-single.svg")}
            alt="Logo agcademy"
          />
        </div>
        <p>
          To increase the growth of agric farmers and food landscape in Africa,
          a decentralised online education to help farmers.
        </p>
        <div className="social-links">
          <a className="twitter">
            <img
              src={require("../../assets/twitter.svg")}
              alt="Twitter social"
            />
          </a>
          <a className="linkedin">
            <img
              src={require("../../assets/linkedin.svg")}
              alt="linkedin social"
            />
          </a>
          <a className="facebook">
            <img
              src={require("../../assets/facebook.svg")}
              alt="facebook social"
            />
          </a>
          <a className="instagram">
            <img
              src={require("../../assets/instagram.svg")}
              alt="instagram social"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
