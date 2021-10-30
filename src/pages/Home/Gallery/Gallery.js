import React from "react";
import Typewriter from "typewriter-effect";
import "./Gallery.css";

const Gallery = () => {
  const img1 = "https://i.ibb.co/2yDG0mR/img1.png";
  const img2 = "https://i.ibb.co/JdpSxnN/img2.png";
  const img3 = "https://i.ibb.co/yfSq2DK/img3.png";
  const img4 = "https://i.ibb.co/rwVGnKt/img4.png";
  const img5 = "https://i.ibb.co/1mL7V0f/img5.png";

  const img6 = "https://i.ibb.co/s1CDpTK/img6.png";
  const img7 = "https://i.ibb.co/Cwj9Jcg/img7.png";
  const img8 = "https://i.ibb.co/fSfFH6s/img8.png";
  const img9 = "https://i.ibb.co/M6H5bd2/img9.png";
  const img10 = "https://i.ibb.co/Xxxqswj/img10.png";

  const img11 = "https://i.ibb.co/X5gNVXj/img11.png";
  const img12 = "https://i.ibb.co/7V44GD0/img12.png";
  const img13 = "https://i.ibb.co/3pxFxwf/img13.png";
  const img14 = "https://i.ibb.co/Vjj2K9t/img14.png";
  const img15 = "https://i.ibb.co/XSrx5Bm/img15.png";

  const img16 = "https://i.ibb.co/pKT2XSc/img16.png";
  const img17 = "https://i.ibb.co/M5Q8k2Z/img17.png";
  const img18 = "https://i.ibb.co/k9cPk4Z/img18.png";
  const img19 = "https://i.ibb.co/1mL7V0f/img5.png";

  const img21 = "https://i.ibb.co/XFLMG2K/beverly-park-fitness.jpg";
  const img24 = "https://i.ibb.co/LvYG2v5/guitar-couple.jpg";
  const img25 = "https://i.ibb.co/jWvqmXq/img6.jpg";

  return (
    <>
      <div className="container-fluid my-5">
        <h2 className="text-center img-h2">VISUAL TOUR</h2>
        <h5 className="text-center img-h5">
          Our boutique hotel channels the classic Tropical Art Deco style of L.
          Murry Dixon with touches of the Italian Riviera, along with luscious
          amenities for...
          <Typewriter
            options={{
              strings: ["The Complete South Beach Experience. Have a Look!"],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          ></Typewriter>
        </h5>
        <div className="img-row">
          <div class="img-column">
            <img src={img1} alt="gallery" />
            <img src={img2} alt="gallery" />
            <img src={img3} alt="gallery" />
            <img src={img4} alt="gallery" />
            <img src={img5} alt="gallery" />
            <img src={img21} alt="gallery" />
          </div>

          <div class="img-column">
            <img src={img6} alt="gallery" />
            <img src={img7} alt="gallery" />
            <img src={img8} alt="gallery" />
            <img src={img9} alt="gallery" />
            <img src={img10} alt="gallery" />
            <img src={img25} alt="gallery" />
          </div>

          <div class="img-column">
            <img src={img11} alt="gallery" />
            <img src={img12} alt="gallery" />
            <img src={img13} alt="gallery" />
            <img src={img14} alt="gallery" />
            <img src={img15} alt="gallery" />
          </div>

          <div class="img-column">
            <img src={img16} alt="gallery" />
            <img src={img17} alt="gallery" />
            <img src={img18} alt="gallery" />
            <img src={img19} alt="gallery" />
            <img src={img24} alt="gallery" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
