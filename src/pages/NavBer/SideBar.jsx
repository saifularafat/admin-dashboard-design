import { Link } from "react-router-dom";
import Logo from "./Logo";

const SideBar = () => {
    return (
        <div className="fixed w-[300px] bg-white left-0 top-0 bottom-0 overflow-y-auto px-4 text-black">
            <Logo />
            <ul>
                <Link to="/dashboard/ecommerce">E-Commerce</Link>
            </ul>
        </div>
    );
};

export default SideBar;