import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offer1 from "../images/offer1.svg";
import offer2 from "../images/offer2.svg";
import offer3 from "../images/offer1.svg";
import offer4 from "../images/offer2.svg";
import offer5 from "../images/offer1.svg";
import offer6 from "../images/offer2.svg";

function Offers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="min-w-screen h-auto bg-white p-10">
        <h1 className=" w-full flex items-center justify-center text-2xl font-bold">Our Exclusive offers </h1>
      <Slider {...settings}>
        <div>
          <img src={offer1} alt="Offer 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={offer2} alt="Offer 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={offer3} alt="Offer 3" className="w-full h-auto" />
        </div>
        <div>
          <img src={offer4} alt="Offer 4" className="w-full h-auto" />
        </div>
        <div>
          <img src={offer5} alt="Offer 5" className="w-full h-auto" />
        </div>
        <div>
          <img src={offer6} alt="Offer 6" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default Offers;
