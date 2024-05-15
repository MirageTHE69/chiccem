import React from "react";
import Product from "../images/product1.webp"

function ProductSection() {
  return (
    <div className="min-w-screen min-h-screen bg-[#E8F1FF]">
      <div className="w-full flex flex-col gap-7 items-center justify-center">
        <span className="text-3xl font-black text-black mt-10">Products</span>
        <p className="text-lg text-center text-black">
          We Provide World Class Product with Free Experience. 30 Authorized
          Centers in Gujarat, Rajasthan, Punjab & Maharashtra.
        </p>
      </div>
      <div className="h-full w-full px-10 py-20">
        <div className="grid grid-cols-3 gap-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full bg-[#2AA7FF] flex flex-col justify-between items-center text-black rounded-xl p-6"
            >
              {/* Title */}
              <h2 className="text-xl font-bold mb-2 text-white">Top Title</h2>
              {/* Button */}
              <button className="bg-white text-black px-10 mt-4 py-2 rounded-md mb-2">
                Book
              </button>
              {/* Divider */}
              <div className="w-full h-1 bg-white mb-2"></div>
              {/* Image */}
              <img
                src={Product}
                alt="Image"
                className=" object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
