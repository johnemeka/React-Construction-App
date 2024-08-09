import React from 'react'
import banner2 from "../../assets/images/banner2.png";
import { CaretForwardOutline } from "react-ionicons";


const ActiveBanner = () => {
  return (
    <div className="w-full  mt-20 md:h-[400px] h-[600px] bg-black relative flex items-center justify-center gap-3">
    <img
        src={banner2}
        alt="banner"
        className="absolute top-0 left-0 w-full h-full z-[50]"
    />
    <div className="flex flex-col items-center justify-center gap-5 lg:px-0 px-8">
        <span className="text-white text-center font-Fira font-bold text-[70px] z-[100] max-w-[800px]">
            Are You Ready To Start Your Next Project?
        </span>
        <button
            className= " z-[100] text-white font-medium text-[20px] bg-black py-2 px-4 rounded-xl flex items-center "
        >
            Get In Touch <CaretForwardOutline cssClasses={"!text-white !fill-white cursor-pointer pl-2"}/>
        </button>
    </div>
</div>
  )
}

export default ActiveBanner