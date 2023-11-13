import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import useTheme from "../../../Shared/useTheme";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const EmailRightSite = () => {
    const [select, setSelect] = useState(false);
    const [spin, setSpin] = useState(false);
    const [dotClick, setDotClick] = useState(false);
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-r-xl shadow-2xl p-2`}>
            {/* search section */}
            <div className="flex items-center md:py-2 py-1">
                <BsSearch className="md:text-xl text-base font-bold md:mx-3 mx-1" />
                <input className="" type="text" placeholder="Search Email " />
            </div>
            <div className="flex items-center justify-between py-2 ">
                <button className="" onClick={() => setSelect(!select)}>
                    {
                        select ?
                            <ImCheckboxChecked />
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
                                <TfiReload className=""/>
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


        </div>
    );
};

export default EmailRightSite;