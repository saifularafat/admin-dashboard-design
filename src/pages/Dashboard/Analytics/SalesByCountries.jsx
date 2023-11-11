import { BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../Shared/useTheme";
import { useState } from "react";
import ShowButtonInfo from "../../../components/ThreeDotButton/ShowButtonInfo";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import CountryInfo from "./../../../components/CountryInfo";
const SalesByCountries = () => {
    const { isDarkMode } = useTheme();
    const [showMenu, setShowMenu] = useState(false);

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
                        <ShowButtonInfo
                            btnLink1='' title1="refresh"
                            btnLink2='' title2="Download"
                            title3="view All" btnLink3=""
                            XSite="left-1/2" YSite="top-9" />
                    }
                </div>
            </div>
            <div className=" py-8 space-y-4">
                <CountryInfo flag="flag-icon-us" CountryTitle="United states" amount="$12.35k" CountryName="United states" Icon={IoIosArrowUp} iconColor="text-blue-700" iconPosition="" percent="28.79%" percentColor="text-blue-600" />
                <CountryInfo flag="flag-icon-br" CountryTitle="Brazil" amount="$6.53k" CountryName="Brazil" Icon={IoIosArrowDown} iconColor="text-red-700" iconPosition="mt-2" percent="12.51%" percentColor="text-red-600" />
                <CountryInfo flag="flag-icon-bd" CountryTitle="Bangladesh" amount="$13.69k" CountryName="Bangladesh" Icon={IoIosArrowUp} iconColor="text-blue-700" iconPosition="" percent="32.54%" percentColor="text-blue-600" />
                <CountryInfo flag="flag-icon-ca" CountryTitle="Canada" amount="$8.12k" CountryName="Canada" Icon={IoIosArrowUp} iconColor="text-blue-700" iconPosition="" percent="20.27%" percentColor="text-blue-600" />
                <CountryInfo flag="flag-icon-in" CountryTitle="India" amount="$29.87k" CountryName="India" Icon={IoIosArrowUp} iconColor="text-blue-700" iconPosition="" percent="29.73%" percentColor="text-blue-600" />
                <CountryInfo flag="flag-icon-fr" CountryTitle="France" amount="$5.99k" CountryName="France" Icon={IoIosArrowDown} iconColor="text-red-700" iconPosition="mt-2" percent="19.10%" percentColor="text-red-600" />
                <CountryInfo flag="flag-icon-pt" CountryTitle="Portugal" amount="$18.77k" CountryName="Portugal" Icon={IoIosArrowUp} iconColor="text-blue-700" iconPosition="" percent="17.39%" percentColor="text-blue-600" />
            </div>
        </div>
    );
};

export default SalesByCountries;