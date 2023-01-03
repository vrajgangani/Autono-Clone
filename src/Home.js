import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Home.css";
import Backvideo from "./Image/file.mp4";

const Naavbar = () => {

  const [changeColor, setChangeColor] = useState(false)
  const changeNavColor = () => {
    if (window.scrollY >= 5) {
      setChangeColor(true)
    }
    else if (window.scrollY < 100 && window.scrollY >=10) {
      setChangeColor(false)
    }
    else {
      setChangeColor(false)
    }
  }
  window.addEventListener('scroll', changeNavColor);

  return (
    <>
      <div className="home-page">
        <video id="bg-video" autoPlay loop muted>
          <source src={Backvideo} type="video/mp4" />
        </video>
        {["md"].map((expand) => (
          <Navbar key={expand} expand={expand} className={changeColor ? 'sticky-top nav-scrolled py-4' : ' py-4'}>
            <Container fluid>
              <Navbar.Brand
                href="#"
                className="navbar-brand ps-lg-5 flex-grow-1"
              >
                <strong>AUTONO</strong>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    className="d-flex justify-content-center align-items-center flex-grow-1"
                  >
                    AUTONO
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center align-items-center flex-grow-1">
                    <Nav.Link href="#technology" className="nav-items px-3">
                      Technology
                    </Nav.Link>
                    <Nav.Link href="#about" className=" nav-items px-3">
                      About
                    </Nav.Link>
                    <Nav.Link href="#careers" className="nav-items px-3">
                      Careers
                    </Nav.Link>
                    <button className="subscribe-btn rounded px-3 mx-3">
                      Subscribe
                    </button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center mt-lg-4 mt-md-4 mt-sm-3 mt-4 p-lg-2 p-md-2 justify-content-center align-items-center">
            <div className="display-4 pb-lg-3 pb-md-3 pb-sm-3 pb-3">
              THE FUTURE OF MOBILITY IS HERE
            </div>
            <div className="" style={{ fontSize: "20px" }}>
              Discover the safest self-driving experience with Autono.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naavbar;
