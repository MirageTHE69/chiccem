import React from "react"
import heroImage from "../images/doctors.svg"

function HeroSection() {
  return (
    <div className="flex justify-around items-center bg-[#E8F1FF] ">
      <div className="max-w-screen">
        <h1 className="text-4xl text-black font-bold">Skip the travel! Take Online</h1>
        <h1 className="text-4xl text-black font-bold">
          Doctor <span className="text-blue-500">Consultation</span>
        </h1>
        <p className="text-black text-2xl mt-4">
        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
        </p>
        <button className="bg-blue-500 text-white px-9 py-2 mt-4 text-lg rounded-md font-semibold hover:bg-blue-700 hover:text-white transition duration-300">Contact Us</button>

      </div>
      <div>
        <img src={heroImage} alt="Hero" className=" mt-5" />
      </div>
    </div>
  )
}

export default HeroSection
