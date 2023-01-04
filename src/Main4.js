import React from "react";
import Background from "./Image/background.webp";
import "./Main2.css";
import { ArrowRightShort } from "react-bootstrap-icons";

export const Main4 = () => {
  return (
    <div
      className="container-fluid main-4 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="vision-text container bg-black text-white d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-4 p-sm-4 p-3 text-sm-center text-lg-start text-md-center text-center rounded-4 mx-lg-5 mx-md-2 mx-sm-2 my-lg-5" 
        style={{ backgroundAttachment: "fixed" }}
      >
        <div>
          <div className="big-line me-lg-5 me-md-5 me-sm-4 me-4">
            <div className="small-line"></div>
          </div>
        </div>
        <div>
          <h5 className="mb-4 opacity-75">WHY AUTONO</h5>
          <h3 className="mb-4">
            A different approach, using a new method of manufacturing.
          </h3>
          <h6 className="opacity-75 mb-4">
            Autonomy requires trust. The key to the successful combination of
            both technology and trust, is dependable electronics.
          </h6>
          <h6 className="opacity-75 mb-4">
            We offer innovative top-quality semiconductors and semiconductor
            solutions combined with broad system knowledge.
          </h6>
          <div>
            <button className="btn btn-outline-light">ReadMore</button>
            <ArrowRightShort
              size={"2.3rem"}
              className="border-end border-bottom border-top rounded-end border-light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
