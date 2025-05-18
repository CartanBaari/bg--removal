import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Result() {
  const {resultImage,image} =useContext(AppContext)
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-10 min-h-[75vh]">
      <div className="  bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* container image */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          {/* leftside */}
          <div>
            <p className=" font-semibold text-gray-600 mb-2">Original</p>
            <img
              className=" rounded-md border"
              src={image ? URL.createObjectURL(Image):''}
              alt=""
            />
          </div>
          {/* right tside */}
          <div className="flex flex-col">
            <p className=" font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className=" rounded-md border border-gray-300 h-full relative overflow-hidden bg-layer">
              <img src={resultImage ? resultImage:""} alt="" />
              {
                !resultImage&&image&& <div className=" absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full w-12 h-12 border-t-transparent animate-spin">

                </div>
              </div>
              }
             
            </div>
          </div>
        </div>
        {/* -----------buttons---------- */}
        { resultImage &&<div className=" flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
        <button className="px-8 py-2.5 border border-violet-600  text-sm text-violet-600 rounded-full hover:scale-105 transition-all duration-700">Try another image</button>
        <a href={resultImage} download className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:scale-105 transition-all duration-700">Download image</a>
        </div>}
      </div>
    </div>
  );
}

export default Result;
