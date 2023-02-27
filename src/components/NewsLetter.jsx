import React from "react";

const NewsLetter = () => {
    return (
        <div className="py-[50px] grid place-content-center bg-[#FC916A]/20">
            <div className="text-center">
                <h1 className=" text-3xl font-normal font-serif text-accent mb-4">Subscribe to stay in touch</h1>
                <p className=" w-1/2 mx-auto text-lg font-normal text-secondary mb-8">
                    Subscribe with email, get of meaningful news, updates of events will be sent to you on a daily
                    basis. We do not spam with any unnecessary topic.
                </p>
            </div>
            <form className="flex gap-10 w-full justify-center items-center">
                <input
                    type="text"
                    className="text-lg py-4 px-5 rounded-md"
                    placeholder="Name"
                />
                <input
                    type="email"
                    className="text-lg py-4 px-5 rounded-md w-[400px]"
                    placeholder="Your Email"
                />
                <button className="cta text-primary">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
