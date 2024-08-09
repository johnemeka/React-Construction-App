import React from "react";
import aboutImage from "../../assets/images/aboutImage.png";
import aboutVideo from "../../assets/images/aboutVideo.png";
import abstractTwo from "../../assets/images/abstract-two.svg";
import { CaretForwardOutline } from "react-ionicons";

// import Button from "../Button";
// import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center justify-center gap-16 lg:mt-20 mt-20 lg:px-40 p-5 relative">
      <div className="flex flex-col gap-3 self-start">
        <div className="flex items-center gap-2">
          <span className="w-[24px] h-[3px] bg-yellow-300"></span>
          <span className="font-Fira text-lg text-lightText uppercase">
            About us
          </span>
        </div>
        <span className="font-Fira text-4xl text-secondary max-w-[450px] font-bold">
          Recognize more about our company
        </span>
      </div>
      <div className="flex lg:flex-row flex-col items-start gap-12">
        <img src={aboutImage} alt="aboutImage" className='md:w-[45%] w-full' />
        <div className="flex flex-col">
          <img src={aboutVideo} alt="aboutVideo"  />
          <span className="font-Urbanist font-bold text-xl text-secondary mt-4">
            Enim leo leo non in viverra adipiscing nisi sed dictum nisi blandit.
          </span>
          <span className="font-Urbanist text-base text-disabled mt-2 text-[14px]">
            Gravida feugiat viverra porttitor semper in faucibus ut. Ipsum, vel
            aliquet purus urna placerat convallis felis. Pretium curabitur fames
            est.
          </span>
          {/* <Button className="mt-10">About us</Button> */}
          <button className="rounded-[14px] w-fit px-4 h-[40px] z-[100] text-white font-medium text-[15px] bg-black mt-2 flex items-center ">
          About us  <CaretForwardOutline cssClasses={"!text-white !fill-white cursor-pointer pl-2"}/>
          </button>
        </div>
      </div>
      <img
        src={abstractTwo}
        alt="abstractTwo"
        className="absolute top-0 left-0 z-[-1] lg:block hidden"
      />
    </div>
  );
};

export default About;
