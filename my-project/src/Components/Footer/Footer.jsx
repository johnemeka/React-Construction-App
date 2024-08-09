import React from 'react'
import {
	Call,
	Location,
	LogoBehance,
	LogoDiscord,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	Mail,
} from "react-ionicons";
import logo from "../../assets/images/logo.png";


const Footer = () => {
  return (
    <div id='contact' className="w-full flex flex-col">
			<div className="w-full lg:px-40 p-5 flex items-center justify-center lg:h-[300px]">
				<div className="w-full  flex lg:flex-row flex-col items-start justify-between lg:gap-2 gap-12">
					<div className="flex flex-col gap-3">
						<img
							src={logo}
							alt="logo"
							className="w-[160px]"
						/>
						<span className="font-Urbanist max-w-[300px] text-[15px] text-lightText">
							Vehicula at eget a arcu neque, ultricies liquet tempus.
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="font-Urbanist text-[15px] font-semibold text-yellow-300 cursor-pointer">
							Home
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							Services
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							News
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							Terms Of Use
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							Privacy Policy
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="font-Urbanist text-[15px] font-semibold text-yellow-300 cursor-pointer">
							Our location
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							About
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							Contact
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							Help Center
						</div>
						<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
							FAQs
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<Location color="#FCD34D" cssClasses="cursor-pointer" />
							<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
								1630 Elm Drive, New York City
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Call color="#FCD34D" cssClasses="cursor-pointer" />
							<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
								+49 34 36573355
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Mail color="#FCD34D" cssClasses="cursor-pointer" />
							<div className="font-Urbanist text-[15px] font-semibold text-secondary cursor-pointer">
								contact@templatesjungle.com
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 gap-5 lg:px-40 px-5 lg:h-[90px] lg:py-0 py-5 border-t border-navBorder">
				<span className="font-Urbanist text-lightText text-[17px]">
					© 2024 Code It Down | Templates Jungle
				</span>
				<div className="flex items-center gap-5">
					<LogoFacebook cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
					<LogoInstagram cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
					<LogoLinkedin cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
					<LogoBehance cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
					<LogoDiscord cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
               		</div>
			</div>
		</div>
  )
}

export default Footer