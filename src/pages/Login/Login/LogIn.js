import React from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
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
  return (
    <div className="container my-4">
      <h2>This is Login.</h2>
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
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
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
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
      <p>
        Create New Account:
        <Link to="/register" className="btn btn-outline-primary ms-2">
          Register
        </Link>
      </p>
      <NavLink to="/home" className="d-inline ms-2">
        <button className="btn btn-outline-primary">GO Back Home</button>
      </NavLink>
      <br /> <br />
      <button className="btn btn-outline-warning" onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default LogIn;
