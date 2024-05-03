import React from "react"
import Logo1 from "../images/music.jpg"
import Logo2 from "../images/chic.jpg"
import Logo3 from "../images/armlogo.jpg"
import Logo4 from "../images/handlogo.jpg"
import Logo5 from "../images/leglogo.jpg"
import Logo6 from "../images/man1.jpg"
import Logo7 from "../images/rollor.jpg"
import Logo8 from "../images/slide.jpg"

function Speciality() {
  return (
    <div className="min-w-screen h-screen flex mt-10 bg-[#5db2ef]">
      <div className="w-1/2">
        {/* Embedded Video */}
        <iframe
          className="w-full h-full p-10"
          src="https://www.youtube.com/embed/Iyd_BtuCrbo"
          title="Chiccem"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-1/2 p-10">
        {/* Card */}
        <div className="bg-white p-6 rounded-xl h-full shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Product Benefits.</h2>
          <p className="text-gray-600 mb-4">
            Chiccem Medical Pvt. Ltd. is an emerging company, manufacturing,
            trading, and supplying a wide array of Massage beds, Heating mats,
            Spine Therapy Massage beds, Heating Waist belts, Massage mattresses,
            and Eye massagers.
          </p>
          {/* Grid */}
          <div className="grid grid-cols-2 gap-8 mt-20 items-center ">
            {/* Logo Grid */}
            <div className="flex items-center justify-center">
              <img src={Logo1} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">Music Therapy</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo2} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">chic assurenace</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo3} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">Arm Therapy</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo4} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">spine Therapy</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo5} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">Leg Therapy</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo6} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">body Massage</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={Logo7} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">Roller Massage</p>
            </div>

            <div className="flex items-center justify-center">
              <img src={Logo8} alt="Logo" className="w-12 h-12" />
              <p className="ml-2">home service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speciality
