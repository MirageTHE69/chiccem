import React from "react";
import Frame from "../images/doc3.svg";

function InfoSection() {
  return (
    <div id="aboutus" className="w-screen h-auto p-10 sm:p-0 sm:h-[60%] mt-20 flex flex-col sm:flex-row justify-center items-center">
      <div className="flex justify-center sm:justify-start h-full sm:w-1/2">
        <img src={Frame} alt="Frame" className="h-full  lg:ml-32 " />
      </div>
      <div className="p-6 sm:p-10 ml-4 flex justify-center sm:justify-end gap-10 items-center flex-col text-[#888888] sm:w-1/2">
        <h1 className="text-3xl font-bold text-black mb-4 text-center sm:text-left">About us</h1>
        <p className="text-black text-center sm:text-left">
          Chiccem Medical Pvt. Ltd. founded in 2018, is an emerging manufacturer
          and supplier of excellent Precision Health Care Products. The Company
          has been engaged in Thermal Massage Therapy Business for the last 15
          years. We have Authorized Dealers in Gujarat, Rajasthan, Punjab, West
          Bengal, Haryana, Madhya Pradesh, Andhra Pradesh and Telangana.
        </p>
        <p className="text-black text-center sm:text-left"> 
          Chiccem Medical Pvt. Ltd. was established in the year 2018 in India,
          with the main goal of encouraging the concept of “Healthy India –
          Happy India ” and providing the finest therapy Solutions for consumers
          to grow their physical and mental health smoothly.
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
