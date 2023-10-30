// import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SidebarData } from "./SidebarData";
// import { SideBarMenuListData } from "./SidebarData";
// import Theme from "../Shared/Theme";
// import { AiFillHome, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
// import { useState } from "react";
// import [ sidebarData ] from "./SidebarData"
import SubMenu from "./SubMenu";

const SideBar = () => {
    // const { isDarkMode } = Theme();
    // const [isOpen, setIsOpen] = useState(false);
    const sidebarData = SidebarData;

    return (
        <div className={`bg-slate-800 md:block hidden fixed w-80 bg-sideColor left-0 top-0 bottom-0 overflow-y-auto px-4 `}>
            <Logo />
            {/* <ul className="pt-5">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <AiFillHome className="text-2xl font-semibold" />
                            <h2 className="text-xl font-medium">Dashboard</h2>
                        </div>
                        <div>
                            {
                                isOpen ? <AiOutlineRight /> : <AiOutlineDown /> && <div className="">
                                    <Link to="/dashboard/ecommerce">E-Commerce</Link>
                                </div>

                            }
                        </div>
                    </div>
                </button>
            </ul> */}
            <div className="w-full">
                {
                    sidebarData.map((items) => <SubMenu
                        item={items}
                        key={items.id}></SubMenu>)
                }
            </div>

        </div>
    );
};

export default SideBar;