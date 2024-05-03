import React from "react";
import Ae from "../images/ae.svg"
import Stethoscope from "../images/Stethoscope.svg"


function Services() {
  return (
    <div className="min-w-screen h-[80%] bg-[#E8F1FF] p-10">
      <h1 className="w-full text-4xl mt-10 font-bold flex items-center justify-center">
        Our Special Services
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-10 p-20">
        {/* Service 1 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Ae}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 2 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Stethoscope}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 3 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Ae}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 4 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Stethoscope}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 5 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Ae}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 6 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Stethoscope}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 7 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Ae}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
        {/* Service 8 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={Stethoscope}
            alt="Service Logo"
            className="w-12 h-12"
          />
          <p className="mt-2">Service Name</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
