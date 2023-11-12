import { BsThreeDotsVertical } from "react-icons/bs";
import ShowButtonInfo from "../../../components/ThreeDotButton/ShowButtonInfo";
import useTheme from "../../Shared/useTheme";
import { useState } from "react";

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
        </div>
    );
};

export default MonthlyCampaignState;