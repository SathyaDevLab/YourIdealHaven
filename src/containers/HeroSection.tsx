import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../assets";
import { AnimatedButton, FancyButton } from "../components";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const HeroSection = () => {
  return (
    <section className="lg:h-screen overflow-hidden bg-white" id="home">
      <div className="flex flex-col xl:flex-row w-full items-center justify-between h-full px-4 md:px-20 gap-10">
        <div className="text-container py-10 md:py-0 sm:flex-1">
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold leading-tight text-purple-800">
            Discover <br />
            Your Dream Property
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Find your perfect home or investment property with expert advice and
            consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <FancyButton
              text={"Get Started"}
              onClick={() => alert("Keep scrolling for more!")}
            />
            <AnimatedButton
              text={"Request a Consultation"}
              onClick={() => alert("Explore further!")}
            />
          </div>
        </div>
        <div className="img-container sm:flex-1 flex gap-2 md:gap-4 justify-center md:justify-end mt-10 md:mt-0 overflow-y-hidden overflow-x-auto md:overflow-visible">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-24 h-[480px] object-cover rounded-lg"
              src={image}
              alt={`property${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
