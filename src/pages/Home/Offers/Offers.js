import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Offer from "../Offer/Offer";
import "./Offers.css";
const Offers = () => {
  const [loader, setLoader] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://intense-reaches-77189.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoader(false);
      });
  }, []);

  return (
    <div id="offers">
      <div className="row m-3 offers">
        <h1 className="text-center mt-5">Our Offers</h1>
        {loader && <Spinner animation="border" variant="warning" />}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {offers.map((offer) => (
            <Offer key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
