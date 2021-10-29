import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Register";
const Register = () => {
  return (
    <div className="container my-5">
      <h2>Create Account:</h2>
      <div className="row align-items-center">
        <div className="col-md-6">{/* <img src={img} alt="" /> */}</div>
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
              Submit
            </button>{" "}
            <br />
            <span>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-outline-info">
                LogIn{" "}
              </Link>
            </span>
            <NavLink to="/home" className="d-inline ms-2">
              <button className="btn btn-outline-primary">GO Back Home</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
