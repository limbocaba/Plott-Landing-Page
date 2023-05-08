import React from "react";
import Typed from "react-typed";

function handleDash() {
  window.open("https://plott-prototype.netlify.app/", "_blank");
}

function Hero() {
  return (
    <div className=" text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2 cursor-default">
          INVEST WITH PLOTT ENTERPRISES
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 cursor-default">
          Grow with Plott.
        </h1>
        <div className=" flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 cursor-default">
            Simple, easy ownership in
          </p>
          <Typed
            className=" md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 cursor-default"
            strings={["Homes", "Rentals", "Flips"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" md:text-2xl text-xl font-bold text-gray-500 cursor-default">
          Become a homeowner in less than 10 minutes!
        </p>
        <button
          className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          onClick={handleDash}
        >
          Start Investing
        </button>
      </div>
    </div>
  );
}

export default Hero;
