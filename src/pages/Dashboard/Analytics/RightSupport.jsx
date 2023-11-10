import { BsThreeDotsVertical, BsTicketPerforated } from "react-icons/bs";
import useTheme from "../../Shared/useTheme";
import { HiOutlineClock } from "react-icons/hi";
import { CiClock2 } from "react-icons/ci";

const RightSupport = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <div className="flex items-center justify-between ">
                <div>
                    <h3 className="text-lg font-semibold">Support Tracker</h3>
                    <p className="text-sm text-slate-400">Last 7 Days</p>
                </div>
                <div>
                    <button>
                        <BsThreeDotsVertical className="text-lg" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pt-6">
                <div className="col-span-2">
                    <h2 className="text-3xl font-semibold tracking-widest pt-2">175</h2>
                    <p className="text-sm font-medium text-slate-400 pb-5 md:pb-7">Total Tickets</p>
                    <div className=" space-y-6 pb-2">
                        <div className="flex items-center gap-1">
                            <span className="w-10 h-10 p-1 rounded-lg bg-blue-100"><BsTicketPerforated className="translate-x-1 translate-y-1 text-2xl text-blue-700" /></span>
                            <div className=" pl-1">
                                <p className="text-base font-semibold leading-none">New Tickets</p>
                                <span className="text-sm leading-none tracking-widest">142</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-10 h-10 p-1 rounded-lg bg-green-100"><CiClock2 className="translate-x-1 translate-y-1 text-2xl text-green-600" /></span>
                            <div className=" pl-1">
                                <p className="text-base font-semibold leading-none">Open Tickets</p>
                                <span className="text-sm leading-none tracking-widest">32</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-10 h-10 p-1 rounded-lg bg-green-100"><CiClock2 className="translate-x-1 translate-y-1 text-2xl text-green-600" /></span>
                            <div className=" pl-1">
                                <p className="text-base font-semibold leading-none">Old Tickets</p>
                                <span className="text-sm leading-none tracking-widest">08</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-10 h-10 p-1 rounded-lg bg-red-200"><HiOutlineClock className="translate-x-1 translate-y-1 text-2xl text-red-700" /></span>
                            <div className=" pl-1">
                                <p className="text-base font-semibold leading-none">Resp Time</p>
                                <span className="text-sm leading-none tracking-widest">1 Day</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">

                </div>
            </div>
        </div>
    );
};

export default RightSupport;