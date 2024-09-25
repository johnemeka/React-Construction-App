import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import cross_icon from '../../assets/images/cross_icon.png'


import {
  LogoBehance,
  ImCancelCircle,
  LogoDiscord,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  MenuOutline,
} from "react-ionicons";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () =>setClick(!click);

  const [showMenu, setShownMenu] = useState(false);
	

  const navItems = [
    { title: "Home", href: "/", active: true },
    { title: "About", href: "/about", active: false },
    { title: "Projects", href: "/project", active: false },
    { title: "Services", href: "/ ", active: false },
    { title: "News", href: "/news", active: false },
    { title: "Contact", href: "/contact", active: false },
  ];


  return (
    <div className="w-full fixed z-30 bg-white lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between">
      <img src={logo} alt="logo" className="cursor-pointer" />
    
      <div >
        <ul className="lg:flex  hidden items-center gap-5 px-10">
          <a href="/" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 text-black transition font-Urbanist font-semibold text-lg cursor-pointer">
              Home
            </li>
          </a>
          <a href="#about" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 transition font-Urbanist font-semibold text-lg cursor-pointer">
              About
            </li>
          </a>
          <a href="#project" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 transition font-Urbanist font-semibold text-lg cursor-pointer">
              Projects
            </li>
          </a>
          <a href="#service" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 transition font-Urbanist font-semibold text-lg cursor-pointer">
              Services
            </li>
          </a>
          <a href="#news" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 transition font-Urbanist font-semibold text-lg cursor-pointer">
              News
            </li>
          </a>
          <a href="#contact" spy={true} smooth={true}>
            <li className="hover:text-yellow-400 transition font-Urbanist font-semibold text-lg cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
      </div>

      <div className="lg:flex hidden items-center gap-7">
        <LogoFacebook
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
        />
        <LogoInstagram
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
        />
        <LogoLinkedin
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
        />
        <LogoBehance
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
        />
        <LogoDiscord
          cssClasses={"!fill-secondary !text-secondary cursor-pointer"}
        />
      </div>
	  <div className="">
    <MenuOutline onClick={()=>setShownMenu(true)} className='w-6 md:hidden '  width={"32px"} height={"32px"} />

    <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
      <div className="flex items-center justify-between px-5 py-6">
        <img src={logo} className="w-36" alt="" />
        {/* <ImCancelCircle onClick={()=>setShownMenu(false)}/> */}
        <img className='w-7' onClick={()=>setShownMenu(false)} src={cross_icon} alt="" />

      </div>

      <ul className='flex flex-col items-center gap-2 mt-2  px-5 text-lg font-medium'>
          <a to="/"   onClick={()=>setShownMenu(false)} >
            <li className='px-4 py-2  rounded inline-block' >
              Home
            </li>
          </a>
          <a to="#about"   onClick={()=>setShownMenu(false)} >
            <li className='px-4 py-2  rounded inline-block' >
              About
            </li>
          </a>
          <a to="#project" onClick={()=>setShownMenu(false)} >
            <li className='px-4 py-2  rounded inline-block' >
              Projects
            </li>
          </a>
          <a to="#services"  onClick={()=>setShownMenu(false)} >
            <li className='px-4 py-2  rounded inline-block' >
              Services
            </li>
          </a>
          <a to="#news"  onClick={()=>setShownMenu(false)} >
            <li className='px-4 py-2  rounded inline-block' >
              News
            </li>
          </a>
          <a href="#contacts" onClick={()=>setShownMenu(false)}>
            <li href="#contacts"  className='px-4 py-2  rounded inline-block' >
              Contact
            </li>
          </a>
        </ul>
    </div>


		
	  </div>
      {/* <div className="cursor-pointer lg:hidden block transition" onClick={handleClick}>
       { click ? <ImCancelCircle /> : <MenuOutline
          className='w-6 md:hidden '
          width={"32px"}
          height={"32px"}
        />}
      </div> */}
    </div>
  );
};

export default Navbar;
