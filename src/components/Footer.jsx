import React from "react";
import { sign } from "../assets";

const Footer = () => {
    return (
        <div className="px-[120px] py-[60px] bg-secondary text-primary">
            <div className=" w-[211px] h-[56px] overflow-hidden relative mb-4">
                <img
                    src={sign}
                    className="img"
                    alt="sign"
                />
            </div>
            <div className="grid grid-cols-6">
                <div className=" col-span-2">
                    <h1 className=" text-2xl font-semibold">Central Chinmaya Mission Trust</h1>
                    <ul className=" text-lg font-normal grid gap-2 mt-2">
                        <li>Sandeepany Sadhanalaya</li>
                        <li>Saki Vihar Road, Powai, Mumbai - 400 072.</li>
                        <li>Tel.: +91-22-2803 4900</li>
                        <li>E-mail: ccmt@chinmayamission.com</li>
                    </ul>
                </div>
                <div className="border-l px-5 border-white">
                    <h1 className=" text-xl font-medium">Links</h1>
                    <ul className=" text-sm font-normal grid gap-2 mt-2">
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Home
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Global CM
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Recent Donation
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                About Us
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="border-l px-5 border-white">
                    <h1 className=" text-xl font-medium">Socials</h1>
                    <ul className=" text-sm font-normal grid gap-2 mt-2">
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Instagram
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Telegram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="border-l px-5 border-white">
                    <h1 className=" text-xl font-medium">Resources</h1>
                    <ul className=" text-sm font-normal grid gap-2 mt-2">
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Publications
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Magazines
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Audios
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Videos
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Downloads
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="border-l px-5 border-white">
                    <h1 className=" text-xl font-medium">Others</h1>
                    <ul className=" text-sm font-normal grid gap-2 mt-2">
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                FAQ
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                News
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Blogs
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Events
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                className="hover:underline"
                                href="/"
                            >
                                {" "}
                                Journeys
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex mt-4">
                <a href="/">Terms of use</a>
                <span>|</span>
                <p> Central Chinmaya Mission Trust © 2022, Mumbai India</p>
            </div>
        </div>
    );
};

export default Footer;
