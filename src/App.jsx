import "./App.css";
import {
    BsChevronDown,
    BsFacebook,
    BsGlobe2,
    BsInstagram,
    BsLinkedin,
    BsTelegram,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";

import { Footer, Header, HeroSection, NewsLetter, ProjectSection, VideoSection } from "./components";
import { flag, user } from "./assets";

function App() {
    return (
        <div className="App font-poppins ">
            <div className="flex justify-between py-3 px-32 bg-primary sticky top-0 z-50">
                <div className="flex gap-4">
                    <BsFacebook className="w-[18px] h-[18px] text-[#404040]" />
                    <BsTwitter className="w-[18px] h-[18px] text-[#404040]" />
                    <BsInstagram className="w-[18px] h-[18px] text-[#404040]" />
                    <BsLinkedin className="w-[18px] h-[18px] text-[#404040]" />
                    <BsYoutube className="w-[18px] h-[18px] text-[#404040]" />
                    <BsTelegram className="w-[18px] h-[18px] text-[#404040]" />
                    <BsGlobe2 className="w-[18px] h-[18px] text-[#404040]" />
                </div>
                <div className="flex gap-6">
                    <div className="flex gap-3 items-center justify-center cursor-pointer">
                        <img
                            className=" w-6 h-6"
                            src={flag}
                            alt="flag"
                        />
                        <h1 className=" text-base font-normal">Sandeepany Himalayas </h1>
                        <span>
                            <BsChevronDown />
                        </span>
                    </div>
                    <h3 className="cursor-pointer">Contact us</h3>
                    <div className="flex gap-3 items-center justify-center cursor-pointer">
                        <img
                            className=" w-6 h-6"
                            src={user}
                            alt="user"
                        />
                        <h1>Raj Verma</h1>
                        <span>
                            <BsChevronDown />
                        </span>
                    </div>
                </div>
            </div>
            <Header />
            <main className="relative w-full">
                <HeroSection />
                <ProjectSection />
                <VideoSection />
                <NewsLetter />
                <Footer />
            </main>
        </div>
    );
}

export default App;
