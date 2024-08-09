import React from "react";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import abstract from "../../assets/images/abstract-three.png";
import { CaretForwardOutline } from "react-ionicons";


const Articles = () => {
  const articles = [
    {
      title: "Top 10 Mindblowing Architecture Buildings In The World",
      image: a1,
      date: "Feb 1, 2022",
      category: "Buildings",
    },
    {
      title: "Amazing Technologies That Helped To Create Creative Works",
      image: a2,
      date: "Feb 2, 2022",
      category: "Construction",
    },
    {
      title: "Top 100 Best Construction Companies Around The World",
      image: a3,
      date: "Feb 3, 2022",
      category: "Company",
    },
  ];
  return (
    <div id="news" className="w-full flex flex-col items-center justify-center gap-6  mt-20 lg:px-40 px-5 relative">
      <div className="flex flex-col gap-3 self-start">
        <div className="flex items-center gap-2">
          <span className="w-[24px] h-[3px] bg-yellow-300"></span>
          <span className="font-Fira text-lg text-lightText uppercase">
            New articles
          </span>
        </div>
        <span className="font-Fira text-4xl text-secondary max-w-[450px] font-bold">
          Read some latest news articles
        </span>
      </div>
      <img
        src={abstract}
        alt="abstract"
        className="absolute top-[-85px] right-0 z-[-1]"
      />
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-6">
        {articles.map((article) => (
          <div
            key={article.title}
            className="flex flex-col gap-4 cursor-pointer"
          >
            <img src={article.image} alt={article.title} />
            <div className="flex flex-col">
              <span className="font-medium font-Urbanist text-articlesDesc">
                {article.date} / {article.category}
              </span>
              <span className="text-secondary font-Fira font-bold text-[20px] max-w-[500px]">
                {article.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
            className= " z-[100] text-white font-medium text-[20px] bg-black py-2 px-4 rounded-xl flex items-center "
        >
           All Articles <CaretForwardOutline cssClasses={"!text-white !fill-white cursor-pointer pl-2"}/>
        </button>
    </div>
  );
};

export default Articles;
