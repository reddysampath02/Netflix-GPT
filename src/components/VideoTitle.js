import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-sceen aspect-video pt-[25%] -mt-32 px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pt-4 pb-6 w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 px-4 text-m font-bold rounded-lg hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="mx-1 bg-gray-500 text-white py-1 px-4 text-m bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
