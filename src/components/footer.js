import React from "react"
import LogoSvg from "../images/logo.jpg"

function Footer() {
  return (
    <footer className="bg-[#2AA7FF] min-w-screen text-white py-8 px-6 md:px-20 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <img src={LogoSvg} alt="Company Logo" className="h-18 mb-4" />
          <p className="text-lg">
            Chiccem Medical Pvt. Ltd. founded in 2018, is an emerging
            manufacturer and supplier of excellent Precision Health Care
            Products. The Company has been engaged in Thermal Massage Therapy
            Business for the last 15 years. We have Authorized Dealers in
            Gujarat, Rajasthan, Punjab, West Bengal, Haryana, Madhya Pradesh,
            Andhra Pradesh and Telangana.
          </p>
        </div>

        <div className="w-full md:w-auto mb-8 md:mb-0">
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 ml-5">Our Products</h3>
            <ul className="list-none text-lg">
              <li>Thermal Massage Bed</li>
              <li>Heating Mat</li>
              <li>Thermal Massage Bed</li>
              <li>Thermal Massage Bed</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto mb-8 md:mb-0">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">Company Address</p>
            <p className="text-sm mb-2">Email: info@example.com</p>
            <p className="text-sm mb-2">Phone: +123456789</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
