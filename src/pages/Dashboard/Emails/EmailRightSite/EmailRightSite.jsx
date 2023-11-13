import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../../Shared/useTheme";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { BiErrorAlt, BiTrash } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillStar, AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { CiShoppingTag } from "react-icons/ci";
import user1 from "./../../../../assets/pic1.png"

const EmailRightSite = () => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const [startClick, setStartClick] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-r-xl shadow-2xl`}>
            {/* search section */}
            <div className="flex items-center md:py-2 py-1 px-2 border-0 border-b border-solid border-slate-300 rounded">
                <BsSearch className="md:text-xl text-base font-bold md:mx-1 mx-1" />
                <input className="" type="text" placeholder="Search Email " />
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
                    onClick={() => setEmailClick(!emailClick)}
                    className="flex items-center justify-between gap-6 bg-slate-100 w-full py-3 border-0 border-b border-solid border-slate-400 hover:scale-y-105 hover:bg-slate-200 transition-all duration-200">
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
                        <div className="info flex items-center pl-2">
                            <img src={user1} alt="user image" className="w-8 h-8 rounded-full" />
                            {/* <img src={user1} alt="" className="object-cover" /> */}
                            <div className="md:flex items-center gap-3">
                                <h3 className="text-lg font-semibold pl-2">Katie Brandt</h3>
                                <p className="text-sm">Bring smile discussion same boy include care.</p>
                            </div>
                        </div>
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
                    <div className="absolute bottom-12 right-12 bg-slate-50 py-2 px-4 rounded-lg">
                        <h2>This is a email click pages</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default EmailRightSite;