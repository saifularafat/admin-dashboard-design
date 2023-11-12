import useTheme from "../../../Shared/useTheme";

const EmailLeftSite = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent rounded-xl shadow-2xl p-2`}>
            <h2>This a Left site page</h2>
        </div>
    );
};

export default EmailLeftSite;