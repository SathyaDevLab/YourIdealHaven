import { useState } from "react";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../assets";
import { GlassyButton, NotificationCard } from "../components";

const NewsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const articles = [
    {
      id: 1,
      img: Image1,
      title: "Major Event Shakes the World",
      subTitle:
        "Global impact as unexpected events unfold, altering the course of world history.",
      btnText: "Read More",
    },
    {
      id: 2,
      img: Image2,
      title: "Community Rises to the Challenge",
      subTitle:
        "Local heroes step up in times of need, inspiring positive change.",
      btnText: "Learn More",
    },
    {
      id: 3,
      img: Image3,
      title: "Innovative Transforming Our Lives",
      subTitle:
        "Explore the cutting-edge gadgets making waves in the tech world.",
      btnText: "Discover Now",
    },
    {
      id: 4,
      img: Image4,
      title: "Tips for a Healthier Lifestyle",
      subTitle:
        "Stay ahead with the latest advice on how to improve your wellbeing.",
      btnText: "Get Tips",
    },
    {
      id: 5,
      img: Image5,
      title: "Sports Highlights of the Week",
      subTitle:
        "Catch up on the most exciting moments from the world of sports.",
      btnText: "Watch Highlights",
    },
    {
      id: 6,
      img: Image6,
      title: "Entertainment News: What's Trending",
      subTitle:
        "Stay updated with the latest news from the world of movies and entertainment.",
      btnText: "See More",
    },
  ];

  return (
    <section
      className="py-10 md:py-20 px-5 md:px-10 lg:px-20 border-b border-slate-300"
      id="news"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
        Latest News
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {articles.slice(0, showMore ? articles.length : 4).map((article) => (
          <NotificationCard
            key={article.id}
            title={article.title}
            subTitle={article.subTitle}
            img={article.img}
            btnText={"Get in Touch"}
            href={"https://www.linkedin.com/in/sathyadevlab/"}
          />
        ))}
      </div>
      <div className=" text-center mt-10 font-bold">
        <GlassyButton
          text={showMore ? "Nope, Not Today" : "Go Wild"}
          onClick={() => setShowMore(!showMore)}
        />
      </div>
    </section>
  );
};

export { NewsSection };
