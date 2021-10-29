import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../images/slider/slider-1.jpg";
import slider2 from "../../../images/slider/slider-2.jpg";
import slider3 from "../../../images/slider/slider-3.jpg";
import slider4 from "../../../images/slider/slider-4.jpg";
import slider5 from "../../../images/slider/slider-5.jpg";
import slider6 from "../../../images/slider/slider-6.jpg";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="my-5 container slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">Kiwi Crush</h3>
            <p className="fs-5">
              Ketel One Vodka – kiwi liqueur – lime juice simple syrup – fresh
              kiwis
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">Vesper's Piña Colada</h3>
            <p className="fs-5">
              White rum – coconut cream pineapple juice – simple syrup.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">Brazilian Samba Cachaça</h3>
            <p className="fs-5">
              – Triple Sec– Strawberry Liqueur <br /> lime juice – simple syrup
              – fresh strawberries
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">Royal Orange</h3>
            <p className="fs-5">
              Aperol – Damrak Gin lime Juice <br /> – Maraschino liqueur <br />
              orange bitters – simple syrup <br /> egg white
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider5} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">Caramel Whisky Sour</h3>
            <p className="fs-5">
              Maker's Mark Bourbon – lemon juice <br /> Angostura bitters –
              caramel syrup
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider6} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">Silver Rose</h3>
            <p className="fs-5">
              Nolet Gin – raspberries – blackberries <br /> ginger liqueur –
              lime – simple syrup
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
