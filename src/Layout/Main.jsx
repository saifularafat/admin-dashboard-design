import { Outlet } from "react-router-dom";
import SideBar from "../pages/NavBer/SideBar";
import Header from "../pages/Shared/Header";

const Main = () => {
    return (
        <div className="md:flex">
            <SideBar />
            <div className="md:pl-80 max-w-screen-xl mx-auto px-1 py-4">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Main;