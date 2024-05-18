import React from "react";
import Logo1 from "../images/music.jpg";
import Logo2 from "../images/chic.jpg";
import Logo3 from "../images/armlogo.jpg";
import Logo4 from "../images/handlogo.jpg";
import Logo5 from "../images/leglogo.jpg";
import Logo6 from "../images/man1.jpg";
import Logo7 from "../images/rollor.jpg";
import Logo8 from "../images/slide.jpg";

function Speciality() {
  return (
    <div className="min-w-screen h-auto flex flex-col md:flex-row mt-10 bg-[#5db2ef]">
      <div className="w-full md:w-1/2">
        {/* Embedded Video */}
        <iframe
          className="w-full h-64 md:h-full p-4 md:p-10"
          src="https://www.youtube.com/embed/Iyd_BtuCrbo"
          title="Chiccem"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-10">
        {/* Card */}
        <div className="bg-white p-6 rounded-xl h-full shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Product Benefits</h2>
          <p className="text-gray-600 mb-4">
            Chiccem Medical Pvt. Ltd. is an emerging company, manufacturing,
            trading, and supplying a wide array of Massage beds, Heating mats,
            Spine Therapy Massage beds, Heating Waist belts, Massage mattresses,
            and Eye massagers.
          </p>
          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-20 items-center">
            {/* Logo Grid */}
            {[
              { src: Logo1, alt: "Music Therapy", text: "Music Therapy" },
              { src: Logo2, alt: "Chic Assurance", text: "Chic Assurance" },
              { src: Logo3, alt: "Arm Therapy", text: "Arm Therapy" },
              { src: Logo4, alt: "Spine Therapy", text: "Spine Therapy" },
              { src: Logo5, alt: "Leg Therapy", text: "Leg Therapy" },
              { src: Logo6, alt: "Body Massage", text: "Body Massage" },
              { src: Logo7, alt: "Roller Massage", text: "Roller Massage" },
              { src: Logo8, alt: "Home Service", text: "Home Service" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={item.src} alt={item.alt} className="w-12 h-12" />
                <p className="ml-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
