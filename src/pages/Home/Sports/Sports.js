import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import SingleSports from "../SingleSports/SingleSports";
import "./Sports.css";
const Sports = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("https://intense-reaches-77189.herokuapp.com/sports")
      .then((res) => res.json())
      .then((result) => setSports(result));
  }, []);
  return (
    <div className="container main-container p-3 my-4 main" id="sports">
      <div className="row">
        <h1 className="text-center text-dark my-3 services-h1">SPORTS</h1>
        <h4 className="fw-bold text-center typing">
          <Typewriter
            options={{
              strings: ["Update Or Deleted"],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          ></Typewriter>
        </h4>
        <div className="row row-cols-1 row-cols-md-3 gy-3 justify-content-center d-flex">
          {sports.map((sport) => (
            <SingleSports key={sport._id} sport={sport} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
