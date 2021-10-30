import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import Beauty from "../Parallax/Beauty";
import Slider from "../Slider/Slider";
import Sports from "../Sports/Sports";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offers />
      <Slider />
      <Sports />
      <Beauty />
    </div>
  );
};

export default Home;
