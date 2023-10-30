import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsAmd } from "react-icons/bs";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="sticky top-0">
            <div className="flex items-center justify-between py-3 bg-slate-800 w-full hover:text-orange-400 text-orange-700 pb-8 cursor-pointer">
                <div className="flex items-center gap-4 ">
                    <BsAmd className="text-3xl" />
                    <h2 className="text-2xl font-semibold uppercase">Dashboard</h2>
                </div>
                <AiOutlineCheckCircle className="text-2xl" />
            </div>
        </Link>
    );
};

export default Logo;