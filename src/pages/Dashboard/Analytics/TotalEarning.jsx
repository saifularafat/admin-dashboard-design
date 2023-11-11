import useTheme from "../../Shared/useTheme";

const TotalEarning = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            
        </div>
    );
};

export default TotalEarning;