import React from "react";
import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import "./Beauty.css";
const Beauty = () => {
  const img = "https://i.ibb.co/82GsYLP/tomas.jpg";
  return (
    <div>
      <Parallax bgImage={img} strength={600}>
        <div className="py-5 text-center text-light">
          <p className="imgBeauty-p" style={{ margin: "12% 0" }}>
            <Typewriter
              options={{
                strings: ["Here For a fabulous time"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            ></Typewriter>
          </p>
        </div>
      </Parallax>
    </div>
  );
};
// bgImage = { img };
export default Beauty;
