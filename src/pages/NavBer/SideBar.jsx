import Logo from "./Logo";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const SideBar = () => {
    const sidebarData = SidebarData;
    return (
        <div className={`myScroll bg-slate-800 md:block hidden fixed w-80 left-0 top-0 bottom-0 overflow-y-auto px-4 pb-4`}>
            <Logo />
            <div className="w-full space-y-2">
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