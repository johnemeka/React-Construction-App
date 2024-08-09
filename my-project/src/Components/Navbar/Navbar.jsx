import React, { useState } from "react";
import logo from "../../assets/images/logo.png";


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
	

  const navItems = [
    { title: "Home", href: "/", active: true },
    { title: "About", href: "/about", active: false },
    { title: "Projects", href: "/project", active: false },
    { title: "Services", href: "/ ", active: false },
    { title: "News", href: "/news", active: false },
    { title: "Contact", href: "/contact", active: false },
  ];
  const content = (
    <>
      <div className="lg:hidden  block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <a to="/" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              Home
            </li>
          </a>
          <a to="about" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              About
            </li>
          </a>
          <a to="project" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              Projects
            </li>
          </a>
          <a to="services" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              Services
            </li>
          </a>
          <a to="news" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              News
            </li>
          </a>
          <a to="contacts" spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded font-Urbanist font-semibold text-lg cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </>
  );

  return (
    <div className="w-full lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between">
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
          <a href="#services" spy={true} smooth={true}>
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
		{click && content}
	  </div>
      <div className="cursor-pointer lg:hidden block transition" onClick={handleClick}>
       { click ? <ImCancelCircle /> : <MenuOutline
          cssClasses={"!fill-secondary !text-secondary"}
          width={"32px"}
          height={"32px"}
        />}
      </div>
    </div>
  );
};

export default Navbar;
