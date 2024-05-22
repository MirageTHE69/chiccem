import React from "react";
import heroImage from "../images/doctors.svg";
import { Link } from "gatsby";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-[#E8F1FF] p-4 md:p-8">
      <div className="max-w-screen text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl text-black font-bold">
          DISCOVER THE UNIQUE HEALTH 
        </h1>
        <h1 className="text-2xl md:text-4xl text-black font-bold">
          BENEFITS OF A <span className="text-blue-500">THERMAL MASSAGE BED</span>
        </h1>
        
        <Link to="">
          <button className="bg-blue-500 text-white px-6 md:px-9 py-2 mt-4 text-base md:text-lg rounded-md font-semibold hover:bg-blue-700 hover:text-white transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={heroImage} alt="Hero" className="mt-5 w-full max-w-md" />
      </div>
    </div>
  );
}

export default HeroSection;
