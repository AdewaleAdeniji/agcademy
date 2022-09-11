import React from "react";
import FlingDown from "../common/FlingDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-description">
        <div className="offer-desc">
          <div className="flex">
            <h4>Created for ambitious farmers.</h4>
            <img
              src={require("../../assets/agcademy-yellow.svg")}
              alt="Alcademy"
            />
          </div>
          <h6>
            To increase the growth of agric farmers and food landscape in
            Africa, a decentralised online education to help farmers.
          </h6>
          <button className="act-button flex">
            Get Started <ArrowRightAltIcon />{" "}
          </button>
        </div>
        <img
          src={require("../../assets/offer.svg")}
          alt="Offer description"
          className="img-offer mobile-none"
        />
      </div>
      <div className="mobile-offer-img">
      <img
          src={require("../../assets/offer.svg")}
          className="img-offer outside"
          alt="Offer description"
        />
      <FlingDown />
      </div>
    </div>
  );
};
export default Offer;
