import { useState } from "react";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../../assets";

const SectionFive = () => {
  const [isClick, setIsClick] = useState(false);
  const articles = [
    {
      id: 1,
      img: Image1,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
    {
      id: 2,
      img: Image2,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
    {
      id: 3,
      img: Image3,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
    {
      id: 4,
      img: Image4,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
    {
      id: 5,
      img: Image5,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
    {
      id: 6,
      img: Image6,
      headLine:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem beatae deleniti dolorum accusamus facere sapiente maxime, maiores necessitatibus. Earum!",
    },
  ];

  return (
    <section className=" p-40 flex flex-col gap-20 items-center justify-center border-b border-slate-300">
      <h1 className=" text-4xl font-bold">Actual news</h1>
      <div className=" flex flex-wrap items-center justify-center gap-12">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`${
              article.id > 4 && !isClick && "hidden"
            } flex flex-col gap-2 w-96`}
          >
            <img
              className="min-h-[500px] max-h-[600px] h-full object-cover rounded-lg"
              src={article.img}
              alt={"article"}
            />
            <h3>{article.headLine}</h3>
            <button>More Details</button>
          </div>
        ))}
      </div>
      <button onClick={() => setIsClick(!isClick)}>
        See {isClick ? "Less" : "More"}
      </button>
    </section>
  );
};

export { SectionFive };
