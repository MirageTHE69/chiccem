import React  from "react";
import Women from '../images/women2.webp';
import LocationSvg from "../images/location.svg";
import PhoneSvg from "../images/phone_round.svg";
import MailSvg from "../images/mail_round.svg";
import WhatsAppSvg from "../images/whatsapp.svg";



function Book(){
    return(
        <div id="contact" className="pb-10 sm:mt-16 sm:pb-0 sm:h-[70%] flex items-center justify-center">
        <div className="w-[85%] h-auto sm:h-[95%] bg-[#15206D] rounded-[20px] flex flex-col sm:flex-row">
          <div className="w-full sm:w-[50%] h-[50%] sm:h-auto">
            <img src={Women} alt="Map" className="sm:rounded-l-[20px] h-full w-full object-contain" />
          </div>
          <div className="w-full sm:w-[50%] h-full pt-8 pl-5">
            <span className="text-white font-semibold font-Jost text-3xl w-full h-[20%] sm:h-[50%]">Contact Information</span>
            <div className="w-full h-[60%] sm:h-auto mt-10 flex flex-col">
              <div className="w-full flex flex-row">
                <div className="w-[30%] h-full p-1 mt-2">
                  <img src={LocationSvg} alt="Location icon" className="w-[40%] h-[40%]" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-3 mt-4">
                  <span className="text-white text-lg font-bold font-Ls">Address</span>
                  <span className="text-white text-sm font-light font-Jost capitalize">PLOT NO 375, SAIRAJ COMPLEX, GADMUDSHINGI, TAL. KARVEER, DIST KOLHAPUR, 416119</span>
                </div>
              </div>
              <div className="w-full flex flex-row mt-5">
                <div className="w-[30%] h-full p-1 mt-2">
                  <img src={PhoneSvg} alt="Phone icon" className="w-[40%] h-[40%]" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-3">
                  <span className="text-white text-lg font-bold font-Ls">Phone number</span>
                  <span className="text-white text-sm font-light font-Jost">+91 93252 62697</span>
                </div>
              </div>
              <div className="w-full flex flex-row mt-5">
                <div className="w-[30%] h-full p-1 mt-2">
                  <img src={MailSvg} alt="Mail icon" className="w-[40%] h-[40%]" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-3">
                  <span className="text-white text-lg font-bold font-Ls">Email Address</span>
                  <span className="text-white text-sm font-light font-Jost">contact@tech-idea.co.in</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    )
}


export default Book