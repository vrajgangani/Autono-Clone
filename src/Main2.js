import React from "react";
import Carimg from "./Image/vision-car.webp";
import './Main2.css';

export const Main2 = () => {
  return (
    <section
      id="vision"
      style={{ padding: "80px 0px", borderColor: "black" }}
      className="bg-black text-white"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="vision-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-5 mt-lg-5 mt-md-5 text-sm-center text-lg-start text-md-center text-center">
            <div>
              <div className="big-line me-lg-5 me-md-5 me-sm-4 me-4">
                <div className="small-line"></div>
              </div>
            </div>
            <div>
              <h5 className="mb-4 opacity-75">VISION</h5>
              <h3 className="mb-4">
                We’re Changing the Way the World Thinks About Cars
              </h3>
              <h6 className="opacity-75">
                The Autono car is fully connected and always online. It is
                all-electric and autonomous. To make this a reality, it takes
                both – technology and trust.
              </h6>
            </div>
          </div>
          <div className="vision-img col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center mb-lg-5">
            <img src={Carimg} alt="car-img" className="img-fluid " />
          </div>
        </div>
      </div>
    </section>
  );
};
