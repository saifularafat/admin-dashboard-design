import Theme from "../../Shared/Theme";
import medal from "../../../assets/medal.png"
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { AiOutlineCodeSandbox, AiOutlineCreditCard } from "react-icons/ai";
import { IoLogoUsd } from "react-icons/io";
import { TbArrowsTransferUp } from "react-icons/tb";
import { } from './../../../AllChartData'
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import OrderProfitChart from "./OrderProfitChart";
import Revenue from "./Revenue";
import RightRevenue from "./RightRevenue";



const ECommerce = () => {
    const { isDarkMode } = Theme();

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 my-8">
                {/* view salary */}
                <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'}  col-span-2 flex w-full text-accent shadow-2xl p-4 overflow-hidden rounded-xl `}>
                    <div>
                        <h3 className="font-medium text-lg">Congratulations 🎉 Saiful</h3>
                        <p className="font-normal tracking-wider mt-3 text-sm">You have won the first place</p>
                        <h2 className="font-medium text-3xl text-blue-600 mt-6 mb-3 cursor-pointer">$50.6k</h2>
                        <Link to="">
                            <button className="py-2 px-4 rounded-xl text-white text-xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-600 transition-all duration-150 capitalize">view sales</button>
                        </Link>
                    </div>
                    <div className="object-cover">
                        <img src={medal} alt="medal" className="w-36" />
                    </div>
                </div>
                <div className={`${isDarkMode ? 'bg-slate-800 text-gray-300' : "bg-white"} col-span-4 text-accent shadow-2xl px-4 md:pt-9 py-5 overflow-hidden rounded-xl `}>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium text-accent">Statistics</h4>
                            <p className="lowercase text-sm text-accent">Updated 1 months ago</p>
                        </div>
                        <div className="md:flex items-center justify-between space-y-3 md:space-y-0 gap-5 mt-6">
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-500/20 p-3 rounded-full">
                                    <FaChartLine className="text-2xl text-blue-600" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">1269K <br /><span className="text-sm font-normal leading-none">salas</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-800/30 p-3 rounded-full">
                                    <FiUser className="text-2xl text-blue-900" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">4.72k <br /><span className="text-sm font-normal leading-none">customer</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-orange-600/20 p-3 rounded-full">
                                    <AiOutlineCodeSandbox className="text-3xl text-orange-800" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">130+ <br /><span className="text-sm font-normal leading-none">products</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-slate-700/20 p-3 rounded-full">
                                    <IoLogoUsd className="text-2xl text-slate-900" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">1269K <br /><span className="text-sm font-normal leading-none lowercase">revenue</span></p>
                            </div>
                        </div>
                        <div className="md:flex items-center justify-center space-y-3 md:space-y-0 mt-5 gap-8">
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-green-600/20 p-3 rounded-full">
                                    <AiOutlineCreditCard className="text-2xl text-green-500" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">20K <br /><span className="text-sm lowercase font-normal leading-none">profit</span></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="bg-blue-800/20 p-3 rounded-full">
                                    <TbArrowsTransferUp className="text-2xl text-blue-700" />
                                </div>
                                <p className="text-xl font-semibold leading-none tracking-wide">05 <br /><span className="text-sm font-normal leading-none lowercase">rang</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                <OrderProfitChart />

                <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} md:col-span-2 shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3`}>
                    <Revenue />
                    <RightRevenue />
                </div>
            </div>
        </section>
    );
};

export default ECommerce;