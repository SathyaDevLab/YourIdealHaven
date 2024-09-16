import { FaBullhorn, FaRocket, FaHome, FaCogs } from "react-icons/fa";

const cardData = [
  {
    icon: FaBullhorn,
    title: "Private Investors",
    description:
      "Discover tailored investment solutions designed specifically for private investors.",
    bgColor: "text-purple-800",
  },
  {
    icon: FaRocket,
    title: "Startup Ventures",
    description:
      "Explore exciting opportunities in innovative startups with high growth potential.",
    bgColor: "text-green-500",
  },
  {
    icon: FaHome,
    title: "Real Estate",
    description:
      "Invest in prime real estate with promising returns and long-term growth.",
    bgColor: "text-yellow-500",
  },
  {
    icon: FaCogs,
    title: "Technology Funds",
    description:
      "Tap into the growing tech industry with targeted investment funds.",
    bgColor: "text-red-500",
  },
];

const UniqueOpportunities = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-center mb-8">
        Explore Unique Investment Opportunities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <card.icon className={`${card.bgColor} text-3xl mb-4`} />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button
              className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition"
              onClick={() => alert("Learn More & Start Dreaming")}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export { UniqueOpportunities };
