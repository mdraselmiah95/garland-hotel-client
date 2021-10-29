import React, { useEffect, useState } from "react";
import Offer from "../Offer/Offer";
import "./Offers.css";
const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div id="offers">
      <div className="row m-3 offers">
        <h1 className="text-center mt-5">Our Offers</h1>
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
