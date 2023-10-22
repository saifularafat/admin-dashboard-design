import { AiOutlineCalendar, AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

const Header = () => {
    return (
        <header className="bg-white w-full py-4 px-3 flex items-center justify-between shadow-xl rounded-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <AiOutlineMail className="text-2xl text-"/>
                <BiMessage />
                <AiOutlineCalendar />
                <AiOutlineStar />
            </div>
            <div className="flex items-center gap-5">

            </div>
        </header>
    );
};

export default Header;