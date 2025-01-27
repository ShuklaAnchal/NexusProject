import React from "react";
import VideoBlock from './videoBlock'

const videos = () => {
  return (
    <div>
      <div className="py-12">
        <div className="h-auto w-full flex flex-wrap gap-5 container justify-between">
         <VideoBlock />
         <VideoBlock />
         <VideoBlock />
         <VideoBlock />
         <VideoBlock />
        </div>
      </div>
    </div>
  );
};

export default videos;
