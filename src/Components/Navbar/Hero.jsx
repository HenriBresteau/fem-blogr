import React from "react";
import { ButtonGosht } from "../Buttons/Button";

const Hero = () => {
  return (
    <div className="py-32 px-8 flex flex-col items-center justify-center gap-6 ">
      <div className="text-center">
        <h1 className="text-white font-ubuntu text-4xl px-7">
          A modern publishing platform
        </h1>
        <p className="text-white/90 text-xl  py-6">
          Grow your audience and build your online brand
        </p>
      </div>

      <div className="flex w-full justify-center gap-12 ">
        <ButtonGosht label="Start For Free" />
        <ButtonGosht label="Learn More" />
      </div>
    </div>
  );
};

export default Hero;
