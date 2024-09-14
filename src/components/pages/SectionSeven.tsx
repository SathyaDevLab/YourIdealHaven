import React from "react";

const SectionSeven = () => {
  return (
    <section>
      <div className="contact-bg flex flex-col gap-10 items-center justify-center">
        <h1 className="text-white text-5xl text-center">
          Learn more about <br />
          inversting with YouIdealHaven
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            className="bg-white w-80 px-6 py-4 rounded-lg outline-none"
            placeholder="enter you email"
          />
          <button className=" bg-black border-slate-800 text-white px-20 rounded-lg">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export { SectionSeven };
