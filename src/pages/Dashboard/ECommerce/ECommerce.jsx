import Theme from "../../Shared/Theme";
import medal from "../../../assets/medal.png"
import { Link } from "react-router-dom";
const ECommerce = () => {
    const { isDarkMode } = Theme();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {/* view salary */}
            <div className={`${isDarkMode ? 'bg-white/5' : "bg-white"} flex  text-accent shadow-2xl p-4 overflow-hidden rounded-xl `}>
                <div>
                    <h3 className="font-medium text-lg">Congratulations 🎉 Saiful</h3>
                    <p className="font-normal tracking-wider mt-3 text-sm">You have won the first place</p>
                    <h2 className="font-medium text-3xl text-blue-600 mt-9 mb-4 cursor-pointer">$50.6k</h2>
                    <Link to="">
                        <button className="py-2 px-4 rounded-xl text-white text-xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-600 transition-all duration-150 capitalize">view sales</button>
                    </Link>
                </div>
                <div className="object-cover">
                    <img src={medal} alt="medal" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ECommerce;