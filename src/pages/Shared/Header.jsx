// import { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BiLogIn, BiMessage, BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { MdNotificationAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import { useState } from "react";

const Header = () => {
    const { isDarkMode, toggleIsDarkAndSunMode } = Theme();

    const [isOpenBer, seIsOpenBer] = useState(false);

    return (
        <header className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent w-full py-4 px-3 flex items-center justify-between gap-5 shadow-xl rounded-md sticky top-0 z-50`}>
            {/* header left side */}
            <div className="md:flex items-center gap-3 md:block hidden">
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

            {/* mobile */}
            <button onClick={() => seIsOpenBer(!isOpenBer)} className="md:hidden ">
                {
                    isOpenBer ?
                        <AiOutlineClose className="icon_style" />
                        :
                        <AiOutlineMenu className="icon_style" />
                }
            </button>
            {/* header right side */}
            <div className="flex items-center md:gap-4 gap-2">
                <div className="flex items-center gap-2">
                    <span className="flag-icon flag-icon-bd text-xl"></span>
                    <span className="hidden md:block text-lg font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#006a4e] to-[#f42a41] duration-300 transition-all">Bangladesh</span>
                    <span className="block md:hidden text-base font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#006a4e] to-[#f42a41] duration-300 transition-all">BD</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                    <div className="flex items-center gap-2">
                        <AiOutlineSearch className="icon_right_style md:block hidden" />
                        <BiLogIn className="icon_right_style  md:block hidden" />
                        <MdNotificationAdd className="icon_right_style  md:block hidden" />
                        <button onClick={toggleIsDarkAndSunMode} className="md:pr-0 pr-1">
                            {
                                isDarkMode == true ? <BiSun className="icon_style" /> : <FaMoon className="icon_style" />
                            }
                        </button>
                    </div>
                    {/* user avatar and info */}
                    <div className="flex items-center md:ml-5">
                        <div className="text-end leading-none">
                            <h3 className="text-sm md:font-semibold font-medium leading-none md:text-xl">Sen Watson</h3>
                            <p className="lowercase md:text-sm text-xs">Admin</p>
                        </div>
                        <div className="avatar md:ml-3 ml-1">
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