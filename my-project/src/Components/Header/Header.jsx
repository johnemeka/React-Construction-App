import React from "react";
import Navbar from "../Navbar/Navbar";
import abstractOne from "../../assets/images/abstract-one.svg";
import header from "../../assets/images/header.png";
import { CaretForwardOutline } from "react-ionicons";

// import Button from '../Button/Button'

export const Header = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <img
        src={abstractOne}
        alt="abstractOne"
        className="absolute top-0 right-0 z-[-1] lg:block hidden"
      />
      <div className="flex w-full lg:flex-row flex-col-reverse items-center justify-between md:mt-16 mt-5 md:px-40 px-5  gap-8">
        <div className="flex flex-col gap-6">
          <span className="text-secondary font-Fira text-6xl md:max-w-[500px] max-w-[95%] font-bold">
            Best construction company around the world.
          </span>
          <p className="text-lg font-Urbanist text-lightText lg:max-w-[500px] max-w-[95%]">
            Vehicula at eget a arcu neque, ultricies. Aliquet tempus vel amet
            eget egestas musus leo non.
          </p>
          {/* <Button className="mt-3">view our projects</Button> */}
          <button className="rounded-[14px] w-fit px-5 h-[60px] z-[100] text-white font-medium text-[20px] bg-black py-2  flex items-center ">
          view our projects  <CaretForwardOutline cssClasses={"!text-white !fill-white cursor-pointer pl-2"}/>
          </button>
          
        </div>
        <img src={header} alt="header" className="md:w-[48%] w-full" />
      </div>
    </div>
  );
};
