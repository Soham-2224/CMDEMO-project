import React from "react";
import { Footer, HeroSection, NewsLetter, ProjectSection, VideoSection, Blogs, CreateBlog } from "./";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Main = () => {
    const userDetails = useSelector(selectUser);
    return (
        <main className="relative w-full">
            {!userDetails ? (
                <span className="text-2xl text-black font-medium">Login to post Blogs</span>
            ) : (
                <CreateBlog />
            )}

            <Blogs />
            <HeroSection />
            <ProjectSection />
            <VideoSection />
            <NewsLetter />
            <Footer />
        </main>
    );
};

export default Main;
