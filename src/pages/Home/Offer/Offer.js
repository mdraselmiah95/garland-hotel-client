import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Offer.css";
const Offer = (props) => {
  const { id, title, offer, img } = props.offer;

  return (
    <div className="col-lg-4 col-md-6 offer">
      <div className="col">
        <div
          className="card p-2 text-center shadow"
          style={{ height: "570px" }}
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
  );
};

export default Offer;
