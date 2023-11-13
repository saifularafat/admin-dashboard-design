import { NavLink } from "react-router-dom";
export const NavLinks = ({ path, Icon, linkName, numberBg, numberText, number }) => {
    return (
        <NavLink to={path}
            className={({ isActive }) => (isActive ? 'active' : ' default')}
        >
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon className="text-lg" />
                    <span className="text-base font-semibold">{linkName}</span>
                </div>
                <div className={`${numberBg} w-5 h-5 relative rounded-full mr-4`}>
                    <span className={`${numberText} text-sm  absolute left-1 `}>{number}</span>
                </div>
            </div>
        </NavLink>
    );
};


export const CompanyLink = ({ companyPath,BgColor, companyName}) => {
    return (
        <NavLink to={companyPath}
            className={({ isActive }) => (isActive ? 'active' : ' default')}
        >
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className={`${BgColor} w-3 h-3 rounded-full`}></span>
                    <span className="text-base font-semibold">{companyName}</span>
                </div>
            </div>
        </NavLink>
    )
}