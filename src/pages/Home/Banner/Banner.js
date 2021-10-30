import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner d-flex align-items-center text-center justify-content-center py-5">
      <div className="text-center my-5 py-5 mainText">
        <h1 className="fw-bolder mainTitle text-light">
          Welcome To Your California Daydream
        </h1>
        <p className="my-4 text-light fs-5 fw-bold my-3">
          Ready To Welcome The Whole Family
        </p>
        <Nav.Link as={HashLink} to="/home#sports">
          <button className="rounded-pill fs-5 py-2 px-5 btn btn-outline-light">
            <FontAwesomeIcon icon={faCaretRight} className="me-2" />
            SPORTS
          </button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Banner;
