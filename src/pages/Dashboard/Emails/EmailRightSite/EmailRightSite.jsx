import { BsSearch } from "react-icons/bs";
import useTheme from "../../../Shared/useTheme";

const EmailRightSite = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-r-xl shadow-2xl p-2`}>
            <div className="flex items-center py-2">
                <BsSearch className="text-xl font-bold mx-3"/>
                <input className="" type="text" placeholder="Search Email " />
            </div>
        </div>
    );
};

export default EmailRightSite;