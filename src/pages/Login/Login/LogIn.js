import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faBackward,
  faUserLock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import useAuth from "../../../hooks/useAuth";
import "./LogIn.css";
const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  const img = "https://i.ibb.co/7VbG2Ww/unlock.png";
  return (
    <div className="container my-5">
      <h2 className="fw-bold">
        <FontAwesomeIcon icon={faUsers} className="me-2" />
        Please Login:
        <span className="text-warning">
          <Typewriter
            options={{
              strings: ["LogIn Or Google Sing In"],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          ></Typewriter>
        </span>
      </h2>
      <div className="row align-items-center">
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
            <button type="submit" className="btn btn-outline-success">
              <FontAwesomeIcon icon={faUserLock} className="me-2" />
              Submit
            </button>
          </form>
          <p>
            Create New Account:
            <Link to="/register" className="btn btn-outline-secondary ms-2">
              <FontAwesomeIcon icon={faUserLock} className="me-2" />
              LogIn
            </Link>
          </p>

          <NavLink to="/home" className="d-inline ms-2">
            <button className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faBackward} className="me-2" />
              GO Back Home
            </button>
          </NavLink>
        </div>
        <div className="col-md-6">
          <img src={img} alt="login" className="img-fluid" />
        </div>
        <button
          className="btn btn-outline-info fw-bold py-2 fs-4"
          onClick={handleGoogleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} className="me-2" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
