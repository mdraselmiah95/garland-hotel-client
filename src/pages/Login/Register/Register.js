import { faBackward, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Register";
const Register = () => {
  return (
    <div className="container my-5">
      <h2>Create Account:</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/LpWBYbJ/secure.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 border p-4">
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Your Password"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Re-enter Password"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faUserLock} className="me-2" />
              Submit
            </button>
            <br />
            <span>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-outline-info">
                <FontAwesomeIcon icon={faUserLock} className="me-2" />
                LogIn
              </Link>
            </span>
            <NavLink to="/home" className="d-inline ms-2">
              <button className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faBackward} className="me-2" />
                GO Back Home
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

/* 

https://i.ibb.co/LpWBYbJ/secure.png
https://i.ibb.co/7VbG2Ww/unlock.png


*/
