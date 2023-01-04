import React from "react";
import MachineImage from "./Image/machine.webp";
import "./Numbers.css";

export const Numbers = () => {
  const Number = [
    {
      name: "EMPLOYEES",
      num: "200",
    },
    {
      name: "CORE TEAMS",
      num: "5",
    },
    {
      name: "CAPITAL",
      num: "200M$",
    },
    {
      name: "PARTNERS",
      num: "326",
    },
  ];

  return (
    <section style={{ padding: "20px 0px" }}>
      <div className="container-fliud">
        <div className="row">
          <div className="machine-img col-12 col-lg-6 col-md-6 col-sm-12">
            <img src={MachineImage} alt="machine-img" className="img-fluid" />
          </div>
          <div className="d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-md-start align-items-md-start justify-content-sm-end align-items-sm-center justify-content-center align-items-center company-numbers col-12 col-lg-6 col-md-6 col-sm-12 p-lg-5 p-md-3 p-sm-2 mt-lg-5 mt-md-5">
            <h4 className="pb-lg-5 pb-md-5">
              <strong> Autono In Numbers</strong>
            </h4>
            <div className="row d-flex flex-row justify-content-center align-items-center">
              {Number.map((items, index) => {
                return (
                  <div
                    className="col-12 col-lg-6 col-md-6 col-sm-12 mb-lg-4 mb-md-4 mb-sm-3 d-flex flex-column justify-content-center align-items-center text-start"
                    key={index}
                  >
                    <h2 className="pb-lg-3">{items.num}</h2>
                    <div className="big-num-line ">
                      <div className="small-num-line"></div>
                    </div>
                    <h5 className="pt-lg-3">{items.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
