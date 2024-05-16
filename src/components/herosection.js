import React from "react"
import heroImage from "../images/doctors.svg"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <div className="flex justify-around items-center bg-[#E8F1FF] ">
      <div className="max-w-screen">
        <h1 className="text-4xl text-black font-bold">DISCOVER THE UNIQUE HEALTH </h1>
        <h1 className="text-4xl text-black font-bold">
        BENEFITS OF A  <span className="text-blue-500">THERMAL MASSAGE BAD</span>
        </h1>
        <p className="text-black text-2xl mt-4">
        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
        </p>
        <Link to="">
        <button className="bg-blue-500 text-white px-9 py-2 mt-4 text-lg rounded-md font-semibold hover:bg-blue-700 hover:text-white transition duration-300">Contact Us</button>
        </Link>
      </div>
      <div>
        <img src={heroImage} alt="Hero" className=" mt-5" />
      </div>
    </div>
  )
}

export default HeroSection