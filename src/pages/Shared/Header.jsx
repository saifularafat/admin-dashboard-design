import { useState } from "react";
import { AiOutlineCalendar, AiOutlineMail, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BiLogIn, BiMessage, BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { MdNotificationAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const dark = localStorage.getItem('darkMode');
    const [isDarkMode, setIsDarkMode] = useState(dark ? true : false);

    const toggleIsDarkAndSunMode = () => {
        if (isDarkMode) {
            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'acid')
            localStorage.removeItem('darkMode');
        } else {
            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('darkMode', 'enabled');
        }
        setIsDarkMode(!isDarkMode);
    }
    return (
        <header className="bg-white dark:bg-slate-600 w-full py-4 px-3 flex items-center justify-between gap-5 shadow-xl rounded-md sticky top-0 z-50">
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
                    <AiOutlineSearch className="icon_right_style" />
                    <BiLogIn className="icon_right_style" />
                    <MdNotificationAdd className="icon_right_style" />
                    <button onClick={toggleIsDarkAndSunMode} className="">
                        {
                            isDarkMode ? <BiSun /> : <FaMoon />
                        }
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;