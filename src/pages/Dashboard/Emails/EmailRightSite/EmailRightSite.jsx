import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../../Shared/useTheme";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { BiDotsVertical, BiErrorAlt, BiTrash } from "react-icons/bi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { AiFillStar, AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { CiShoppingTag } from "react-icons/ci";
import user1 from "./../../../../assets/pic1.png"
import { RiArrowDownSFill, RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { MdPrint } from "react-icons/md";
import { FaDocker, FaHandDots, FaPrint } from "react-icons/fa6";

const EmailRightSite = () => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-r-xl shadow-2xl relative`}>
            {/* search section */}
            <div className="flex items-center md:py-2 py-1 px-2 border-0 border-b border-solid border-slate-300 rounded">
                <BsSearch className="md:text-xl text-base font-bold md:mx-1 mx-1" />
                <input className={`${isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-800"} w-full`} type="text" placeholder="Search Email " />
            </div>
            {/* table icon */}
            <div className="flex items-center justify-between py-2 border-0 border-b border-solid border-slate-400 px-2">
                <button className="" onClick={() => setSelect(!select)}>
                    {
                        select ?
                            <div className="flex items-center gap-4">
                                <Tooltip id="my-tooltip" place="top" />
                                <ImCheckboxChecked />
                                <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                                <HiOutlineMail className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                <AiOutlineFolder className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                                <CiShoppingTag className="text-2xl text-black" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                            </div>
                            :
                            <GrCheckbox className="" />
                    }

                </button>
                <div className="flex items-center gap-4 ">
                    <button className="hover:bg-slate-200 p-2 rounded-full" onClick={() => setSpin(!spin)}>
                        {
                            spin ?
                                <TfiReload className="animate-spin" />
                                :
                                <TfiReload className="" />
                        }

                    </button>
                    <button className="relative hover:bg-slate-200 p-1 rounded-full" onClick={() => setDotClick(!dotClick)}>
                        <BsThreeDotsVertical />
                        {
                            dotClick &&
                            <div className="absolute right-4 top-6 rounded-lg bg-white">
                                <Link className="inline-block hover:text-blue-500 hover:bg-slate-200 rounded-t-lg py-1 px-2 text-sm" to="">Refresh</Link> <br />
                                <Link className="inline-block hover:text-blue-500 hover:bg-slate-200 rounded-b-lg py-1 px-3 text-sm" to="">Details</Link>

                            </div>
                        }
                    </button>
                </div>
            </div>
            {/* Main Content table */}
            <div>
                <button
                    className={`${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-200 "} flex items-center justify-between gap-6 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 transition-all duration-200`}>
                    <div className="flex items-center gap-2 px-2">
                        <button className="" onClick={() => setSelect(!select)}>
                            {
                                select ?
                                    <ImCheckboxChecked />
                                    :
                                    <GrCheckbox />
                            }

                        </button>
                        <button className="" onClick={() => setStartClick(!startClick)}>
                            {
                                startClick ?
                                    <AiFillStar className="text-xl text-yellow-500" />
                                    :
                                    <AiOutlineStar className="text-xl " />
                            }

                        </button>
                        <button
                            onClick={() => setEmailClick(!emailClick)}
                            className="info flex items-center pl-2">
                            <img src={user1} alt="user image" className="w-8 h-8 rounded-full" />
                            {/* <img src={user1} alt="" className="object-cover" /> */}
                            <div className="md:flex items-center gap-3">
                                <h3 className="text-lg font-semibold pl-2">Katie Brandt</h3>
                                <p className="text-sm">Bring smile discussion same boy include care.</p>
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mx-3">
                        <Tooltip id="my-tooltip" place="top" />
                        <BiTrash className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Delete Mail" />
                        <HiOutlineMail className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                        <BiErrorAlt className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark to spam" />
                    </div>
                </button>
                {
                    emailClick &&
                    <div className="absolute right-0 top-0 bottom-0 bg-slate-100 rounded-tr-xl rounded-br-xl w-full h-[470px] overflow-y-scroll myEmailScroll">
                        <div className={`MAIN_ICONS_FULL_PART ${isDarkMode ? "bg-slate-800" : "bg-white" } py-2 px-4`}>
                            <div className="grid grid-cols-3 md:grid-cols-11 py-3 border-0 border-b border-solid border-slate-300">
                                {/* first part */}
                                <div className="BACK_TITLE col-span-2 md:col-span-10 flex items-center">
                                    <button onClick={() => setEmailClick(!emailClick)}>
                                        <RiArrowDownSFill className="text-2xl font-semibold" />
                                    </button>
                                    <h2 className="pl-3 text-sm font-semibold">Bring smile discussion same boy include care.</h2>
                                    <div className="flex items-center gap-2 pl-2">
                                        <p className="text-xs bg-red-200 text-red-800 py-1 px-2 rounded-md">Private</p>
                                        <p className="text-xs bg-blue-200 text-blue-800 py-1 px-2 rounded-md">Company</p>
                                    </div>
                                </div>
                                {/* SECOND PART */}
                                <div className="PRINTER col-span-1 gap-0 text-end  flex items-center">
                                    <button className="hover:bg-slate-200 p-2 rounded-2xl transition-all duration-200">
                                        <FaPrint className="text-xl text-slate-400" />
                                    </button>
                                    <button className="hover:bg-slate-200 p-2 rounded-2xl transition-all duration-200">
                                        <BiDotsVertical className="text-xl" />
                                    </button>
                                </div>
                            </div>
                            {/* THREE PART */}
                            <div className="ICONS grid grid-cols-3 md:grid-cols-5 py-3 border-0 border-b border-solid border-slate-300">
                                <div className="col-span-2 md:col-span-4 flex items-center">
                                    <div className="flex items-center gap-4 mx-3 z-10">
                                        <Tooltip id="my-tooltip" place="top" />
                                        <BiTrash className="text-xl z-10" data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
                                        <HiOutlineMailOpen className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Mark as Unread" />
                                        <AiOutlineFolder className="text-xl" data-tooltip-id="my-tooltip" data-tooltip-content="Folder" />
                                        <CiShoppingTag className="text-2xl text-black" data-tooltip-id="my-tooltip" data-tooltip-content="Label" />
                                    </div>
                                </div>
                                {/* FOUR PART */}
                                <div className=" PART_BY_PART col-span-1 flex items-center">
                                    <p className="text-sm font-medium">1-10 <span className="text-xs">of</span> 371</p>
                                    <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                                        <RiArrowLeftSFill className="text-2xl" />
                                    </button>
                                    <button className="hover:bg-slate-200 p-1 rounded-2xl transition-all duration-200">
                                        <RiArrowRightSFill className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* email content */}
                        <div className={`${isDarkMode ? "bg-slate-800" : "bg-white" } text-accent mt-4 mx-4 py-2 px-3 rounded-t-lg`}>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                            <h2>This is a email click pages</h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default EmailRightSite;