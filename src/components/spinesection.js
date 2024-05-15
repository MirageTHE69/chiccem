import React from "react"
import Logo1 from "../images/music.jpg"
import Logo2 from "../images/chic.jpg"
import Logo3 from "../images/armlogo.jpg"
import Logo4 from "../images/handlogo.jpg"
import Logo5 from "../images/leglogo.jpg"
import Logo6 from "../images/man1.jpg"
import Logo7 from "../images/rollor.jpg"
import Logo8 from "../images/slide.jpg"

function SpineSection() {
  return (
    <div className="min-w-screen h-screen flex mt-10 bg-[#5db2ef]">
      <div className="w-1/2">
        {/* Embedded Video */}
        <iframe
          className="w-full h-full p-10"
          src="https://www.youtube.com/embed/TvEkplw6BKw"
          title="SPINE CARE AT CHICCEM MEDICAL CENTER"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-1/2 p-10">
        {/* Card */}
        <div className="bg-white p-6 rounded-xl h-full shadow-lg">
          <h2 className="text-2xl font-bold mb-4">The Science of Spine</h2>
          <p className="text-gray-600 mb-4">
            Chiccem Medical Pvt. Ltd. brings you standardized healthcare
            products with better safety, inspired by our principles of providing
            natural health and happiness for all.
          </p>
          {/* Point Section with Scroll */}
          <div className="h-[60vh] mt-10 overflow-y-auto">
            {/* Point and Line Grid */}
            <div className="flex items-center">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Manage Chronic Pain</p>
                <p>
                  Receiving regular massage and therapy using our products will
                  help relieve chronic pain.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Decrease Inflammation</p>
                <p>
                  Use thermal massage beds and heating mats to manage stress and
                  decrease chronic inflammation.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Reduce Fatigue</p>
                <p>
                  Our products help stimulate the muscles, release muscle
                  tension, and reduce physical fatigue.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Improve Metabolism</p>
                <p>
                  Boost your metabolism to support weight management and improve
                  overall health with the best heat therapy and thermal massage.
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Revitalize Levels</p>
                <p>
                  Revitalize your energy level and relieve physical and mental
                  stress with a heating mattress.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Detoxify the Body</p>
                <p>
                  Using jade rollers and Far Infrared ray projectors, you can
                  gently detoxify the body and increase circulation while
                  relieving aches and pains.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1 h-full bg-gray-400"></div>
              <div className="ml-4">
                <p className="font-bold text-balck">Relax Deep Sleep</p>
                <p>
                  Use a thermal massage bed to relieve insomnia, boost the
                  immune system, and improve the quality of sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpineSection
