import React from "react";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
    return (
        <div className="relative w-full text-primary">
            <ImageSlider />
            <div className=" absolute top-0 left-0 w-full h-[400px] pl-[120px] pt-[54px] gradient">
                <h1 className=" text-[39px] leading-[50px] mb-10 max-w-[500px] font-normal font-serif">
                    Donate on their behalf, their life will be transformed, so as yours!
                </h1>
                <button className=" cta mb-8">Donate Now</button>
                <p className=" text-base font-normal">You are viewing donations from Chinmaya Mission Chennai</p>
            </div>
        </div>
    );
};

export default HeroSection;
