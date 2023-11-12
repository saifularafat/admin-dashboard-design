import { BsThreeDotsVertical } from "react-icons/bs";
import ShowButtonInfo from "../../../components/ThreeDotButton/ShowButtonInfo";
import useTheme from "../../Shared/useTheme";
import { useState } from "react";
import SocialInfo from "./SocialInfo";
import { TfiEmail } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { AiOutlineLink } from "react-icons/ai";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { BiError } from "react-icons/bi";
import {  } from "react-icons/";
import { FaUsers } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

const MonthlyCampaignState = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <div className="flex items-center justify-between relative ">
                <div>
                    <h3 className="text-lg font-semibold">Monthly Campaign State</h3>
                    <p className="text-sm text-slate-400">4.71k Social Visitors</p>
                </div>
                <div className="">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="" >
                        <BsThreeDotsVertical className="w-6 h-6 hover:bg-slate-300 hover:rounded-xl p-1 transition-all duration-200" />
                    </button>
                    {
                        !showMenu &&
                        <ShowButtonInfo
                            btnLink1='' title1="refresh"
                            btnLink2='' title2="Download"
                            btnLink3="" title3="view All"
                            XSite="left-1/2" YSite="top-9" />
                    }
                </div>
            </div>
            <div className="mt-5">
                <SocialInfo iconBg="bg-blue-100" Icon={TfiEmail} iconColor="text-blue-700" title="Emails" amount="10,786" percent="1.78%" percentColor="text-blue-500" />
                <SocialInfo iconBg="bg-sky-100" Icon={MdVisibility} iconColor="text-sky-600" title="Visits" amount="1375" percent="1.37%" percentColor="text-sky-700" />
                <SocialInfo iconBg="bg-red-200" Icon={TbHandClick} iconColor="text-red-700" title="Clicked" amount="896" percent="1.89%" percentColor="text-orange-600" />
                <SocialInfo iconBg="bg-blue-200" Icon={AiOutlineLink} iconColor="text-blue-700" title="Opened" amount="6,939" percent="2.51%" percentColor="text-blue-600" />
                <SocialInfo iconBg="bg-yellow-100" Icon={VscWorkspaceUnknown} iconColor="text-yellow-600" title="Complaints" amount="17" percent="0.19%" percentColor="text-yellow-600" />
                <SocialInfo iconBg="bg-blue-200" Icon={FaUsers} iconColor="text-blue-700" title="Subscribe" amount="186" percent="0.83%" percentColor="text-blue-500" />
                <SocialInfo iconBg="bg-red-200" Icon={BiError} iconColor="text-red-500" title="Unsubscribe" amount="61" percent="0.33%" percentColor="text-red-600" />
            </div>
        </div>
    );
};

export default MonthlyCampaignState;