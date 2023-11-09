import Theme from "../../Shared/Theme";
import SwiperAnaly from "./SwiperAnaly";

const FirstSection = () => {
    const { isDarkMode } = Theme();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-7">
            <div className={`col-span-2 w-full text-accent shadow-2xl overflow-hidden rounded-xl`}>
                <SwiperAnaly />
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-full text-accent shadow-2xl p-4 overflow-hidden rounded-xl`}>

            </div>
            <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} w-full text-accent shadow-2xl p-4 overflow-hidden rounded-xl`}>

            </div>
        </div>
    );
};

export default FirstSection;