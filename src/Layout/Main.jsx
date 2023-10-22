import { Outlet } from "react-router-dom";
import SideBar from "../pages/NavBer/SideBar";
import Header from "../pages/Shared/Header";

const Main = () => {
    return (
        <div className="">
            <div className="flex">
                <SideBar />
                <div className="pl-72 max-w-screen-xl mx-auto px-1 py-4">
                    <Header />
                </div>
            </div>
            <div className="pl-72 max-w-screen-xl mx-auto px-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;