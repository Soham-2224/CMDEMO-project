import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";

import { video } from "../assets";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="w-full py-[100px] px-0 relative">
            <video
                controls={isPlaying}
                className="w-full h-[641px]"
            >
                <source
                    src={video}
                    type="video/webm"
                />
                <source
                    src={video}
                    type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
            </video>
            <BsPlayCircle
                onClick={() => setIsPlaying(true)}
                className={` ${
                    isPlaying && "hidden"
                } absolute w-[90px] h-[90px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer`}
            />
        </div>
    );
};

export default VideoSection;
