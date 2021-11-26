import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./SingleSports.css";
const SingleSports = (props) => {
  const { title, details, img } = props.sport;
  const { user } = useAuth();
  return (
    <>
      {user.email ? (
        <div className="col-lg-4 col-md-6 sports">
          <div className="col">
            <div
              className="card p-2 text-center shadow"
              style={{ height: "600px" }}
            >
              <img src={img} className="rounded img-fluid" alt="photos" />
              <div className="card-body">
                <h4 className="card-title py-3">{title}</h4>
                <p className="">{details}</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <NavLink to="/addSport" className="d-inline ms-2">
                  <button className="btn btn-outline-success py-2 px-3">
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="me-2 
                "
                    />
                    UPDATE
                  </button>
                </NavLink>
                <NavLink to="/manageSports" className="d-inline ms-2">
                  <button className="btn btn-outline-danger px-3 py-2">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="me-2 
                "
                    />
                    DELETE
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default SingleSports;

/* 




  <div className="col-lg-4 col-md-6 offer">
      <div className="col">
        <div
          className="card p-2 text-center shadow"
          style={{ height: "550px" }}
        >
          <img src={img} className="rounded img-fluid" alt="photos" />
          <div className="card-body">
            <h4 className="card-title py-3">{title}</h4>
            <p className="">{offer}</p>
            <Link to={`/offerDetails/${id}`}>
              <button className="btn btn-outline-dark">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="me-2 
                "
                />
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
*/
