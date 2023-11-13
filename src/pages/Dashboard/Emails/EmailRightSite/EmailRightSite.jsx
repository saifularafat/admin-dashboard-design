import useTheme from "../../../Shared/useTheme";

const EmailRightSite = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-r-xl shadow-2xl p-2`}>
            <h3>This a right site Email</h3>
        </div>
    );
};

export default EmailRightSite;