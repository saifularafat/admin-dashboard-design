import { BsAmd } from "react-icons/bs";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="flex items-center gap-4 py-3 cursor-pointer">
                <BsAmd className="text-3xl text-orange-700" />
                <h2 className="text-2xl font-semibold text-orange-700 uppercase">Dashboard</h2>
            </div>
        </Link>
    );
};

export default Logo;