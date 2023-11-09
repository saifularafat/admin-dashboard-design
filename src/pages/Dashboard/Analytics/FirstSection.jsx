import { AiOutlineLink, AiOutlineShoppingCart } from "react-icons/ai";
import Theme from "../../Shared/Theme";
import SwiperAnaly from "./SwiperAnaly";

const FirstSection = () => {
    const { isDarkMode } = Theme();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-7">
            <div className={`col-span-2 w-full text-accent shadow-2xl overflow-hidden rounded-xl`}>
                <SwiperAnaly />
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-full text-accent shadow-2xl p-4 overflow-hidden rounded-xl`}>
                <div className="flex items-center justify-between">
                    <h2 className="text-sm">Sales Overview</h2>
                    <p className="text-sm font-semibold">+18.2%</p>
                </div>
                <h2 className="text-2xl font-semibold pt-2">$42.5k</h2>
                <div className="flex items-center justify-between   mt-3">
                    <div className="border-r-2 border-0 border-solid border-slate-300">
                        <div className="flex items-center gap-2 ">
                            <div className="bg-blue-300 rounded-lg p-1 mt-2 ">
                                <AiOutlineShoppingCart className="text-blue-700 text-xl" />
                            </div>
                            <p className=" font-medium text-slate-500 mr-2">Order</p>
                        </div>
                        <h4 className="text-xl font-semibold pt-1">62.2%</h4>
                        <p className="text-sm text-slate-400">6,440</p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2 ">
                            <p className=" font-medium text-slate-500 mr-2">Visits</p>
                            <div className="bg-blue-300 rounded-lg p-1 mt-2 ">
                                <AiOutlineLink className="text-blue-700 text-xl" />
                            </div>
                        </div>
                        <h4 className="text-xl text-right font-semibold pt-1">25.5%</h4>
                        <p className="text-sm text-right text-slate-400">12,749</p>
                    </div>
                </div>
                <progress className="progress progress-info w-56 mt-3" value="70" max="100"></progress>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-full text-accent shadow-2xl p-4 overflow-hidden rounded-xl`}>

            </div>
        </div>
    );
};

export default FirstSection;