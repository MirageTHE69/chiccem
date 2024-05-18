import React from "react";
import Frame from "../images/doc3.svg";

function SpineSection() {
  return (
    <div className="min-w-screen h-auto bg-[#5db2ef] mt-10 flex flex-col sm:flex-row">
      {/* Video Section */}
      <div className="w-full sm:w-1/2">
        <iframe
          className="w-full h-96 sm:h-full p-4 sm:p-10"
          src="https://www.youtube.com/embed/TvEkplw6BKw"
          title="SPINE CARE AT CHICCEM MEDICAL CENTER"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* Card Section */}
      <div className="w-full sm:w-1/2 p-4 sm:p-10">
        <div className="bg-white p-6 rounded-xl h-full shadow-lg">
          <h2 className="text-2xl font-bold mb-4">The Science of Spine</h2>
          <p className="text-gray-600 mb-4">
            Chiccem Medical Pvt. Ltd. brings you standardized healthcare
            products with better safety, inspired by our principles of providing
            natural health and happiness for all.
          </p>
          <div className="  h-12 sm:h-full overflow-y-scroll">
            {/* Point and Line Grid */}
            {[
              { title: "Manage Chronic Pain", content: "Receiving regular massage and therapy using our products will help relieve chronic pain." },
              { title: "Decrease Inflammation", content: "Use thermal massage beds and heating mats to manage stress and decrease chronic inflammation." },
              { title: "Reduce Fatigue", content: "Our products help stimulate the muscles, release muscle tension, and reduce physical fatigue." },
              { title: "Improve Metabolism", content: "Boost your metabolism to support weight management and improve overall health with the best heat therapy and thermal massage." },
              { title: "Revitalize Levels", content: "Revitalize your energy level and relieve physical and mental stress with a heating mattress." },
              { title: "Detoxify the Body", content: "Using jade rollers and Far Infrared ray projectors, you can gently detoxify the body and increase circulation while relieving aches and pains." },
              { title: "Relax Deep Sleep", content: "Use a thermal massage bed to relieve insomnia, boost the immune system, and improve the quality of sleep." },
            ].map((item, index) => (
              <div key={index} className="flex items-center mt-4">
                <div className="w-1 h-full bg-gray-400"></div>
                <div className="ml-4">
                  <p className="font-bold text-black">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpineSection;
