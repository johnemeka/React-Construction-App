import React from "react";
import { useState } from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import { CaretForwardOutline } from "react-ionicons";

const Project = () => {
  const [categories, setCategories] = useState([
    { title: "All", active: true },
    { title: "Buildings", active: false },
    { title: "Interior & Exterior", active: false },
    { title: "Renovate", active: false },
    { title: "Industry", active: false },
    { title: "Road", active: false },
  ]);

  const projects = [
    { title: "Jaguare garment industry", image: p1 },
    { title: "Outbox creatives building", image: p2 },
    { title: "Slova private residence", image: p3 },
  ];

  const handleClick = (title) => {
    setCategories((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };
  return (
    <div id="project" className="w-full flex flex-col items-center justify-center gap-6 lg:mt-20 mt-20 lg:px-40 px-6 p-5">
      <div className="flex flex-col gap-3 self-start">
        <div className="flex items-center gap-2">
          <span className="w-[24px] h-[3px] bg-yellow-300"></span>
          <span className="font-Fira text-lg text-lightText uppercase">
            late st projects
          </span>
        </div>
        <span className="font-Fira text-4xl text-secondary max-w-[450px] font-bold">
          Explore our works
        </span>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-11 overflow-x-auto lg:pb-0 pb-3">
          {categories.map((item) => (
            <div
              key={item.title}
              onClick={() => handleClick(item.title)}
              className={`${
                item.active ? "text-yellow-300" : "text-disabled"
              } text-lg font-Urbanist font-medium cursor-pointer whitespace-nowrap`}
            >
              {item.title}
            </div>
          ))}
       
        </div>
        <button className="  rounded-[14px] w-fit px-3 h-[40px] z-[100] text-white font-medium text-[13px] bg-black   lg:flex  hidden items-center ">
            view our projects{" "}
            <CaretForwardOutline
              cssClasses={"!text-white !fill-white cursor-pointer pl-2"}
            />
          </button>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-6">
        {projects.map((project) => (
          <div className="flex flex-col gap-2 cursor-pointer">
            <img src={project.image} alt={project.title} />
            <span className="text-secondary font-Fira font-medium text-[22px]">
              {project.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
