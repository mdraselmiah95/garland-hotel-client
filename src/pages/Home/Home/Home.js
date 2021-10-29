import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import Beauty from "../Parallax/Beauty";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <Offers />
      <Slider />
      <Beauty />
    </div>
  );
};

export default Home;
