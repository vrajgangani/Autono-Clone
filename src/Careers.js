import React from "react";
import { ArrowRightShort } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";

export const Careers = () => {
  return (
    <section
      id="careers"
      style={{ padding: "80px 0px", borderColor: "white" }}
      className="bg-black text-white"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="careers-text d-flex col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center p-lg-5 p-md-3 p-sm-3 p-5 mt-lg-5 mt-md-5 text-sm-center text-lg-start text-md-center text-center">
            <div>
              <div className="big-line me-lg-5 me-md-5 me-sm-4 me-4">
                <div className="small-line"></div>
              </div>
            </div>
            <div>
              <h5 className="mb-4 opacity-75">CAREERS</h5>
              <h3 className="mb-4">
                We’re looking for innovative talent to join our team. See all
                positions and submit your CV.
              </h3>
              <div>
                <button className="btn btn-outline-light">Openings</button>
                <ArrowRightShort
                  size={"2.3rem"}
                  className="border-end border-bottom border-top rounded-end border-light"
                />
              </div>
            </div>
          </div>
          <div className="carousel col-12 col-lg-6 col-md-6 col-sm-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
