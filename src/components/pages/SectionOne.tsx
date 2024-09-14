import React from "react";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../assets";

const SectionOne: React.FC = () => {
  return (
    <section className=" h-screen overflow-hidden">
      <div className=" flex items-center justify-between h-full">
        <div className="p-20 flex-1">
          <p className=" text-[9rem] font-bold leading-none">
            Inverst <br />
            in real estate
          </p>
          <div className=" flex gap-4 mt-5">
            <button className="btn bg-purple-500 text-white">
              Request a call
            </button>
            <button className="btn border  border-gray-600 font-medium">
              To get the consulatation
            </button>
          </div>
        </div>
        <div className=" flex-1 flex gap-4 justify-end">
          <img className="img" src={Image1} alt="hero" />
          <img className="img" src={Image2} alt="hero" />
          <img className="img" src={Image3} alt="hero" />
          <img className="img" src={Image4} alt="hero" />
          <img className="img" src={Image5} alt="hero" />
          <img className="img" src={Image6} alt="hero" />
          <img className="img" src={Image7} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export { SectionOne };
