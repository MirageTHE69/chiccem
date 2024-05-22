import React  from "react";
import Women from '../images/women2.webp';
import LocationSvg from "../images/location.svg";
import PhoneSvg from "../images/phone_round.svg";
import MailSvg from "../images/mail_round.svg";
import WhatsAppSvg from "../images/whatsapp.svg";
import { Link } from "gatsby";



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
                  <Link to = "https://www.google.com/maps/place/CHICCEM+MEDICAL+PVT.+LTD./@22.3221779,73.2119801,18z/data=!3m1!4b1!4m6!3m5!1s0x395fcf133b987f85:0x3a1119d48261a17d!8m2!3d22.3221764!4d73.2127456!16s%2Fg%2F11cn17zft6?entry=ttu">
                  <span className="text-white text-sm font-light font-Jost capitalize w-[90%]">301-303, Narayan Elegance-2, B/s Axis Bank, Near Sangam Char Rasta, Harni Road, Vadodara-390022.</span></Link>
                </div>
              </div>
              <div className="w-full flex flex-row mt-5">
                <div className="w-[30%] h-full p-1 mt-2">
                  <img src={PhoneSvg} alt="Phone icon" className="w-[40%] h-[40%]" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-3">
                  <span className="text-white text-lg font-bold font-Ls">Phone number</span>
                  <Link to = "tel:+1234567890">
                  <span className="text-white text-sm font-light font-Jost">91-8898893893</span>
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-row mt-5">
                <div className="w-[30%] h-full p-1 mt-2">
                  <img src={MailSvg} alt="Mail icon" className="w-[40%] h-[40%]" />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-center gap-3">
                  <span className="text-white text-lg font-bold font-Ls">Email Address</span>
                  <Link to = "mailto:admin@chiccem.com">
                  <span className="text-white text-sm font-light font-Jost">admin@chiccem.com</span>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    )
}


export default Book