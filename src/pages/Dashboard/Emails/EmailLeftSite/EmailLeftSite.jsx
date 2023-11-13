import { useState } from "react";
import useTheme from "../../../Shared/useTheme";
import { AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { CompanyLink, NavLinks } from "../../../../components/NavLinks";
import { BsSend } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { PiStarThin } from "react-icons/pi";
import { BiTrash } from "react-icons/bi";

const EmailLeftSite = () => {
    const { isDarkMode } = useTheme();
    const [compose, setCompose] = useState(false)
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-l-xl shadow-2xl`}>
            {/* Desktop */}
            <div className=" w-full h-[470px] overflow-y-scroll myEmailScroll">
                {/* compose */}
                <div className="w-11/12 mx-auto mt-3">
                    <button
                        onClick={() => setCompose(!compose)}
                        className="w-full bg-blue-700/50 hover:bg-blue-700/70 rounded-lg py-1 px-3 text-white text-lg font-medium transition-all duration-200 "
                    >
                        Compose
                    </button>
                    {
                        compose &&
                        <div className="absolute bottom-12 right-12 p-3 rounded-xl bg-white z-10">
                            <h2>This a compose Component </h2>
                        </div>
                    }
                </div>
                {/* email router */}
                <ul className="pt-6 space-y-4">
                    <li>
                        <NavLinks path="" Icon={AiOutlineMail} linkName="Inbox" numberBg="bg-blue-100" numberText="text-blue-700" number="6" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={BsSend} linkName="Send" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={BsSend} linkName="Send" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={MdEdit} linkName="Draft" numberBg="bg-red-100" numberText="text-red-600" number="2" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={PiStarThin} linkName="Starred" numberBg="bg-yellow-100" numberText="text-yellow-800" number="9" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={BiTrash} linkName="Trash" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <NavLinks path="" Icon={AiOutlineSetting} linkName="Setting" numberBg="" numberText="" number="" />
                    </li>
                    <li>
                        <div className="bg-slate-200 w-full mt-9">
                            <span className="text-xs pl-4 ">LABELS</span>
                        </div>
                    </li>
                    <li>
                        <CompanyLink companyPath="" BgColor="bg-blue-700" companyName="Personal" />
                    </li>
                    <li>
                        <CompanyLink companyPath="" BgColor="bg-sky-500" companyName="Company" />
                    </li>
                    <li>
                        <CompanyLink companyPath="" BgColor="bg-orange-600" companyName="Important" />
                    </li>
                    <li>
                        <CompanyLink companyPath="" BgColor="bg-red-600" companyName="Private" />
                    </li>
                </ul>
            </div>

            {/* mobile */}
        </div>
    );
};

export default EmailLeftSite;