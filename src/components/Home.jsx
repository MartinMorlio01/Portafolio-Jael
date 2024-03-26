import React from "react";
import cosme1 from "../assets/cosme1-principal.jpg";
import cosme2 from "../assets/img-cv.jpeg";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img alt="header" src={cosme1} className="sm:hidden w-screen" />
      <img
        alt="cosme"
        src={cosme2}
        className="absolute left-[70%] top-[250px] h-[200px] w-[200px] rounded-full sm:static"
      />
      <div className="absolute sm:static left-[20%] top-[40%] w-[619px] h-[250%] text-black text-[32px] font-normal">
        <p>
          Hola! Soy Jael Jiménez.{" "}
          <h5 className="text-[40px]">
            Cosmetóloga, Cosmiatra y Maquilladora Profesional
          </h5>
        </p>
      </div>
    </div>
  );
};

export default Home;
