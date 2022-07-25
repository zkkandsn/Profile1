import "../styles/header.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";

export default function Header() {
  const [link, setLink] = useState(["home", "about", "service", "contact"]);
  const [show, setShow] = useState("false");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <i
          class="fa-solid navbarIcon ms-1 d-flex d-lg-none fa-lg fa-bars"
          variant="primary"
          onClick={handleShow}
        ></i>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <OffcanvasHeader closeButton>
            <div></div>
          </OffcanvasHeader>
          <ul
            id="navbarOffCanvas"
            className="d-flex ms-4 flex-column col-10 justify-content-around"
          >
            <li className="activeOffCanvas mt-3">
              <a id="btn1" href="#">
                Home
              </a>
            </li>
            <li className="activeOffCanvas mt-3">
              <a id="btn1" href="#">
                About
              </a>
            </li>
            <li className="activeOffCanvas mt-3">
              <a id="btn1" href="#">
                Service
              </a>
            </li>
            <li className="activeOffCanvas mt-3">
              <a id="btn1" href="#">
                Contact
              </a>
            </li>
          </ul>
        </Offcanvas>
      </>
    );
  }
  return (
    <div className="header container col-md-12 col-lg-12 d-flex justify-content-around">
      <div className="headerMain col-lg-6 d-none d-lg-flex">
        <ul id="navbar" className="d-flex col-lg-8 justify-content-around">
          <li>
            <a
              id="btn1"
              className={link == "home" ? "active" : ""}
              href="#"
              onClick={() => {
                setLink("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              id="btn1"
              className={link == "about" ? "active" : ""}
              href="#"
              onClick={() => {
                setLink("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              id="btn1"
              className={link == "service" ? "active" : ""}
              href="#"
              onClick={() => {
                setLink("service");
              }}
            >
              Service
            </a>
          </li>
          <li>
            <a
              id="btn1"
              className={link == "contact" ? "active" : ""}
              href="#"
              onClick={() => {
                setLink("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="headerIcons col-lg-6 col-md-11 col-11 justify-content-end d-flex">
        <a
          className="iconFb"
          target="_blank"
          rel="noreferrer"
          href="http://www.facebook.com/z1kkan"
        >
          <i class="fa-brands fa-lg fa-facebook-f"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.instagram.com/zkkan"
        >
          <i class="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.instagram.com/zkkan"
        >
          <i class="fa-brands fa-lg fa-twitter"></i>
        </a>
        {["end"].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </div>
    </div>
  );
}
