// import { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineMail, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BiLogIn, BiMessage, BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { MdNotificationAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Theme from "./Theme";

const Header = () => {
    const { isDarkMode, toggleIsDarkAndSunMode } = Theme();
    return (
        <header className={`${isDarkMode ? 'bg-white/5' : 'bg-background'} bg-background text-accent w-full py-4 px-3 flex items-center justify-between gap-5 shadow-xl rounded-md sticky top-0 z-50`}>
            <div className="flex items-center gap-3">
                <Link to="#">
                    <AiOutlineMail className="icon_style" />
                </Link>
                <Link to="#">
                    <BiMessage className="icon_style" />
                </Link>
                <Link to="#">
                    <AiOutlineCalendar className="icon_style" />
                </Link>
                <Link to="#">
                    <AiOutlineStar className="icon_style" />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="flag-icon flag-icon-bd text-xl"></span>
                    <span className="text-lg font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-red-600 duration-300 transition-all">Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <AiOutlineSearch className="icon_right_style" />
                        <BiLogIn className="icon_right_style" />
                        <MdNotificationAdd className="icon_right_style" />
                        <button onClick={toggleIsDarkAndSunMode} className="">
                            {
                                isDarkMode == true ? <BiSun className="icon_style" /> : <FaMoon className="icon_style" />
                            }
                        </button>
                    </div>
                    {/* user avatar and info */}
                    <div className="flex items-center ml-5">
                        <div className="text-end leading-none">
                            <h3 className="text-sm font-semibold leading-none">Sen Watson</h3>
                            <p className="lowercase">member</p>
                        </div>
                        <div className="avatar ml-3">
                            <div className="w-12 rounded-full">
                                <img src="https://i.ibb.co/TKMk2pK/coach2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;