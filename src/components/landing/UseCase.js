import React from "react";
import UseCaseCard from "../cards/UseCaseCard";
import FlingDown from "../common/FlingDown";

const UseCase = () => {
  return (
    <>
    <div className="usecase">
      <div className="usecase-head">
        <h3>
          Empowering <span className="text-agcademy-blue">100,000</span> Farmers
          through Innovation.
        </h3>
        <h6>
          To increase the growth of agric farmers and food landscape in Africa,
          a decentralised online education to help farmers access knowledge and
          finance to grow well.
        </h6>
      </div>
      <div className="usecases">
        <div className="usecase-title">
          <h4>
            Why use <span className="text-agcademy-blue">agcademy?</span>{" "}
          </h4>
        </div>
        <div className="usecase-row">
          <div className="usecase-column">
            <UseCaseCard />
            <UseCaseCard />
          </div>
          <div className="usecase-column two">
            <UseCaseCard />
            <UseCaseCard />
          </div>
        </div>
      </div>
    </div>
    <FlingDown />
    </>
  );
};
export default UseCase;
