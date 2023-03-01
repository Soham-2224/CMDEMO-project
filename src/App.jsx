import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

import { Main, Header, Login, SignUp } from "./components";
import { flag, user } from "./assets";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "./features/user/userSlice";

function App() {
    const userDetails = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <Router>
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
                        {userDetails ? (
                            <h1
                                className="cursor-pointer"
                                onClick={() => dispatch(logout())}
                            >
                                Logout
                            </h1>
                        ) : (
                            <Link to={"/login"}>
                                <h1 className="cursor-pointer">Login</h1>
                            </Link>
                        )}

                        {userDetails && (
                            <div className="flex gap-3 items-center justify-center cursor-pointer">
                                <img
                                    className=" w-6 h-6"
                                    src={user}
                                    alt="user"
                                />
                                <h1>{userDetails?.username}</h1>
                                <span>
                                    <BsChevronDown />
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <Header />

                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route
                        exact
                        path="/"
                        element={<Main />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
