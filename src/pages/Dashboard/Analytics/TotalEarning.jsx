import { BsThreeDotsVertical } from "react-icons/bs";
import ShowButtonInfo from "../../../components/ThreeDotButton/ShowButtonInfo";
import useTheme from "../../Shared/useTheme";
import { useState } from "react";
import { IoIosArrowUp, IoLogoUsd } from "react-icons/io";
import ReactApexChart from "react-apexcharts";
import { totalEarningDoubleBarChart } from "../../../AllChartData";
import CountryInfo from "../../../components/CountryInfo";

const TotalEarning = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { isDarkMode } = useTheme();
    const [doubleBar] = useState(totalEarningDoubleBarChart)
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <div className="flex items-center justify-between relative ">
                <h3 className="text-lg font-semibold">Total Earning</h3>
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
            <div className="mt-6">
                <div className="flex items-center gap-1 text-slate-800">
                    <p className="text-3xl font-semibold tracking-wider">89%</p>
                    <div className="flex items-center gap-[1px] pl-2">
                        <IoIosArrowUp className="text-base font-semibold" />
                        <span className=" font-semibold">27.77%</span>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <ReactApexChart options={doubleBar.options} series={doubleBar.series} type="bar" height={270} width={'100%'} />
            </div>
            <div className="md:space-y-5 space-y-2 pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className=" rounded-lg bg-blue-200 p-1">
                            <IoLogoUsd className="text-2xl text-blue-700"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold leading-none">Total Sales</h3>
                            <p className="text-xs">Total Sales</p>
                        </div>
                    </div>
                    <span className={`text-lg font-semibold text-green-500`}>+$88</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className=" rounded-lg bg-blue-200 p-1">
                            <IoLogoUsd className="text-2xl text-blue-700"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold leading-none">Total Sales</h3>
                            <p className="text-xs">Total Sales</p>
                        </div>
                    </div>
                    <span className={`text-lg font-semibold text-green-500`}>+$88</span>
                </div>
            </div>
        </div>
    );
};

export default TotalEarning;