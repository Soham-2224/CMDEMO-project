import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsShare, BsShareFill } from "react-icons/bs";

const Card = ({ data }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <div className="relative w-[400px] h-[484px] border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in">
            <div className="relative w-full h-1/2 overflow-hidden select-none">
                <img
                    src={data.img}
                    alt="project"
                />
            </div>
            <div className="flex gap-3 absolute top-[190px] right-4">
                <div
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`w-10 group ${
                        isBookmarked ? "bg-primary" : "bg-accent"
                    } hover:bg-primary h-10  flex justify-center items-center rounded-full overflow-hidden cursor-pointer`}
                >
                    <BsBookmark
                        className={` group-hover:text-accent ${isBookmarked ? "text-accent" : "text-primary"} w-5 h-5`}
                    />
                </div>
                <div className="w-10 h-10 bg-accent flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                    <BsShare className="text-primary w-5 h-5" />
                </div>
            </div>
            <div className="p-4 flex flex-col w-full justify-between h-1/2">
                <h1 className="font-inter text-2xl font-normal">{data.title}</h1>
                <p className="text-base font-normal text-[#737373] h-[100px] w-full overflow-hidden ">{data.details}</p>
                <button className="cta text-white">Donate</button>
            </div>
        </div>
    );
};

export default Card;
