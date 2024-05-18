import React from "react";
import PhoneIcon from '../images/icon_call.svg'; // Importing phone icon
import EmailIcon from '../images/icon_mail.svg'; // Importing email icon


function Topnavbar(){
    return(
        <nav className="flex flex-col sm:flex-row justify-between py-5 sm:py-5 px-20 w-screen items-center sm:items-center h-[5%] sm:h-auto bg-[#5db2ef] text-white ">
            <div className="hidden sm:block font-Jost text-xs sm:text-sm  font-medium text-center">
                Chiccem Medical Pvt. Ltd. is an emerging company, manufacturing, trading, and supplying a wide array of Massage beds, Heating mats, Spine Therapy Massage beds, Heating Waist belts, Massage mattresses, and Eye massagers.
            </div>
        </nav>
    )
}


export default Topnavbar
