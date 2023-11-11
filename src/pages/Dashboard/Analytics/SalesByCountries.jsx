import { BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../Shared/useTheme";
import { useState } from "react";
import ShowButtonInfo from "../../../components/ThreeDotButton/ShowButtonInfo";

const SalesByCountries = () => {
    const { isDarkMode } = useTheme();
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <div className="flex items-center justify-between relative ">
                <div>
                    <h3 className="text-lg font-semibold">Sales by Countries</h3>
                    <p className="text-sm text-slate-400">Sales by Countries</p>
                </div>
                <div className="">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="" >
                        <BsThreeDotsVertical className="w-6 h-6 hover:bg-slate-300 hover:rounded-xl p-1 transition-all duration-200" />
                    </button>
                    {
                        !showMenu &&
                        <ShowButtonInfo btnLink1='' title1="view page" btnLink2='' title2="move page" XSite="left-1/2" YSite="top-9" />
                    }
                </div>
            </div>
        </div>
    );
};

export default SalesByCountries;