import { BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../Shared/useTheme";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LiaCcPaypal } from "react-icons/lia";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { earningReportBarChart } from "../../../AllChartData";

const LeftReport = () => {
    const { isDarkMode } = useTheme();
    const [bar] = useState(earningReportBarChart)
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <div className="flex items-center justify-between ">
                <div>
                    <h3 className="text-lg font-semibold">Earning Reports</h3>
                    <p className="text-sm text-slate-400">Weekly Earnings Overview</p>
                </div>
                <div>
                    <button>
                        <BsThreeDotsVertical className="text-lg" />
                    </button>
                </div>
            </div>
            <div className="md:flex gap-6">
                <div className="pt-12">
                    <h2 className="md:text-4xl text-2xl font-semibold flex items-center gap-2">$678 <span className="text-sm font-medium bg-blue-100 py-1 px-3 text-slate-600 rounded-md">+3.3%</span></h2>
                    <p className="text-xs text-slate-400 pt-6">You informed of this week <br /> compared to last week</p>
                </div>
                <div>
                    <ReactApexChart options={bar.options} series={bar.series}  type="bar" height={180}/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 border-[2px] border-solid border-slate-300 rounded-lg p-3 overflow-hidden">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-100 w-9 h-9 p-2 rounded-lg">
                            <FaHandHoldingUsd className="text-xl text-blue-900" />
                        </div>
                        <h4 className="text-sm font-semibold">Earnings</h4>
                    </div>
                    <h2 className="font-semibold text-2xl py-3">$767.2</h2>
                    <progress className="progress progress-primary" value="50" max="100"></progress>
                </div>
                <div>
                    <div className=" flex items-center gap-2">
                        <div className="bg-blue-100 w-9 h-9 p-2 rounded-lg">
                            <CiClock2 className="text-2xl font-bold text-blue-900" />
                        </div>
                        <h4 className="text-sm font-semibold">Profit</h4>
                    </div>
                    <h2 className="font-semibold text-2xl py-3">$767.2</h2>
                    <progress className="progress progress-info" value="30" max="100"></progress>
                </div>
                <div>
                    <div className=" flex items-center gap-2">
                        <div className="bg-orange-100 w-9 h-9 p-2 rounded-lg">
                            <LiaCcPaypal className="text-2xl text-orange-700" />
                        </div>
                        <h4 className="text-sm font-semibold">Expense</h4>
                    </div>
                    <h2 className="font-semibold text-2xl py-3">$767.2</h2>
                    <progress className="progress progress-warning" value="75" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default LeftReport;