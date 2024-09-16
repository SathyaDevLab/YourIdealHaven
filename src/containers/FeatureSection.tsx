import { useState } from "react";
import { FaDollarSign, FaHome, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  {
    img: <FaHome size={30} />,
    title: "Exceptional Service",
    subTitle: "Dedicated Support",
    description:
      "Our team is dedicated to providing exceptional service and support throughout your home-buying journey.",
  },
  {
    img: <FaMapMarkerAlt size={30} />,
    title: "Prime Locations",
    subTitle: "Best Amenities",
    description:
      "We offer properties in prime locations, ensuring you have access to the best amenities and conveniences.",
  },
  {
    img: <FaDollarSign size={30} />,
    title: "Competitive Pricing",
    subTitle: "Best Value",
    description:
      "Our properties are competitively priced to give you the best value for your investment.",
  },
];

const FeatureSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-5 md:px-10 lg:px-20">
      <div className="text-content">
        <div className="py-10 flex flex-col gap-5">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-slate-800 text-3xl md:text-4xl lg:text-5xl leading-snug font-semibold">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg lg:text-xl md:w-[60%] text-center">
              Our commitment to quality and customer satisfaction sets us apart.
              We offer a range of unique features that cater to diverse needs
              and preferences. From personalized service to top-notch amenities,
              discover why we are the preferred choice for finding your perfect
              home.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-1 hover:scale-105 transition bg-white p-5 border border-slate-100 rounded-lg shadow-lg"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex items-center gap-5 border-b pb-2">
                  <div
                    className={`mb-3 flex items-center transition ${
                      hoverIndex === index && " scale-125"
                    }`}
                  >
                    {feature.img}
                  </div>
                  <div>
                    <h3
                      className={`${
                        hoverIndex === index
                          ? "text-purple-800 font-bold scale-105"
                          : "text-slate-900"
                      } transition text-xl font-medium`}
                    >
                      {feature.title}
                    </h3>
                    <h4 className="text-slate-600 text-lg font-normal">
                      {feature.subTitle}
                    </h4>
                  </div>
                </div>
                <p className="text-base mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export { FeatureSection };
