import React from "react";
import { Button } from "./Button";
import Car3 from "./Image/car2.webp";
import CarSpeed from "./Image/car-speed.webp";
import Car4 from "./Image/car4.webp";

export const Main3 = () => {
  return (
    <>
      <section
        id="vision1"
        style={{ padding: "10px 0px", borderColor: "white" }}
        className="bg-white text-dark"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="vision-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-4 text-sm-center text-lg-start text-md-center text-center">
              <div>
                <h1 className="mb-4">AUTONOMOUS DRIVING</h1>
                <h6 className="opacity-75 mb-4">
                  Dependability is key for automated driving. We deliver
                  dependable electronics which enable systems that are the
                  foundation for trust.
                </h6>
                <Button />
              </div>
            </div>
            <div className="vision-img col-12 col-lg-6 col-md-6 col-sm-12 justify-content-end ">
              <img src={Car3} alt="car-img" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision2"
        style={{ padding: "10px 0px", borderColor: "white" }}
        className="bg-white text-dark"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="vision-img col-12 col-lg-6 col-md-6 col-sm-12 justify-content-end ">
              <img src={CarSpeed} alt="car-img" className="img-fluid " />
            </div>
            <div className="vision-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-3 text-sm-center text-lg-start text-md-center text-center">
              <div>
                <h1 className="mb-4">REAL-TIME INFORMATION</h1>
                <h6 className="opacity-75 mb-4">
                  We’ve developed an app so that each vehicle can drive
                  autonomously and make decisions based on real-time information
                  and situational awareness.
                </h6>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision3"
        style={{ padding: "50px 0px", borderColor: "white" }}
        className="bg-white text-dark"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="vision-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-5 text-sm-center text-lg-start text-md-center text-center">
              <div>
                <h1 className="mb-4">PERCEPTION ENABLED</h1>
                <h6 className="opacity-75 mb-4">
                Using groundbreaking perception-enabled sensor technology, the Autono car is a fully driverless vehicle engineered to the highest degree of precision and safety. It’s autonomous driving reimagined.
                </h6>
                <Button />
              </div>
            </div>
            <div className="vision-img col-12 col-lg-6 col-md-6 col-sm-12 justify-content-end ">
              <img src={Car4} alt="car-img" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
