import { useState } from "react";
import { BsCart3, BsSearch, BsXLg } from "react-icons/bs";

import { logo } from "../assets";

const Header = () => {
    const [searchIsActive, setSearchIsActive] = useState(false);

    return (
        <header className=" sticky top-[48px] flex justify-between items-center py-[10px] px-[120px] bg-secondary text-primary z-50">
            {/* logo */}
            <div className="flex gap-[5px] justify-center items-center ">
                <div className=" w-10 relative overflow-hidden">
                    <img
                        src={logo}
                        alt=""
                    />
                </div>
                <div>
                    <h1 className=" text-xl font-semibold">SANDEEPANY HIMALAYAS </h1>
                    <h5 className=" text-[13px] font-light">Sidhbari - Chinmaya Tapovan Trust</h5>
                </div>
            </div>

            {/* nav links */}
            <nav>
                <ul className="flex gap-4">
                    <li className=" text-lg font-normal text-accent">
                        <a href="/">Home</a>
                    </li>
                    <li className=" text-lg font-normal hover:text-accent">
                        <a href="/">Global CM</a>
                    </li>
                    <li className=" text-lg font-normal hover:text-accent">
                        <a href="/">Recent Donation</a>
                    </li>
                    <li className=" text-lg font-normal hover:text-accent">
                        <a href="/">About us</a>
                    </li>
                </ul>
            </nav>

            {/* searchBar & cart */}
            <div className="flex gap-4 justify-center items-center">
                <div
                    className={`${
                        searchIsActive ? "w-[300px] cursor-default" : "w-10 cursor-pointer"
                    } h-10 bg-primary flex justify-center items-center rounded-full overflow-hidden transition-all ease-in`}
                >
                    <BsXLg
                        onClick={() => setSearchIsActive(false)}
                        className={`${searchIsActive ? "visible" : "hidden"} text-secondary cursor-pointer`}
                    />
                    <input
                        type="text"
                        className={`mx-2 border-0 outline-none focus:ring-0 focus:outline-none text-secondary ${
                            searchIsActive ? "visible" : "hidden"
                        }`}
                    />
                    <BsSearch
                        onClick={() => setSearchIsActive(!searchIsActive)}
                        className="text-secondary w-5 h-5"
                    />
                </div>
                <div className="w-10 h-10 bg-primary flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                    <BsCart3 className="text-secondary w-5 h-5" />
                </div>
            </div>
        </header>
    );
};

export default Header;
