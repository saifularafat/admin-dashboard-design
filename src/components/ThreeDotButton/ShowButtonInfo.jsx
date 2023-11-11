import { Link } from "react-router-dom";
import useTheme from "../../pages/Shared/useTheme";

const ShowButtonInfo = ({ btnLink1, title1, btnLink2, title2, btnLink3, title3, XSite, YSite }) => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'} absolute ${XSite} ${YSite} text-accent w-auto transition-all duration-300 rounded-lg z-10`}>
            <Link to={btnLink1} className="siteBTN">{title1}</Link>
            <Link to={btnLink2} className="siteBTN">{title2}</Link>
            <Link to={btnLink3} className="siteBTN">{title3}</Link>
        </div>
    );
}
export default ShowButtonInfo;