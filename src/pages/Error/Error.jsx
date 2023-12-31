import { Link } from "react-router-dom";
// import Theme from "../Shared/Theme";
import error from "../../assets/animation/error.json"
import Lottie from "lottie-react";
import useTheme from "../Shared/useTheme";
const Error = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-blue-100 text-slate-800'}  h-screen overflow-hidden flex items-center justify-center text-accent pt-9`}>
            <div>
                <div className="text-center">
                    <h2 className="md:text-lg text-base font-semibold">Page Not Found 🦇</h2>
                    <p className="md:text-base text-sm font-normal py-3">Oops! 😓 The requested URL was not found on this server.</p>
                    <Link to="/" className="">
                        <button className="text-sm md:text-base font-medium py-3 px-6 tracking-widest bg-primary rounded-lg shadow-2xl text-white hover:bg-blue-500 transition-all duration-300 mt-3">Go Back</button>
                    </Link>
                </div>
                <Lottie animationData={error} loop={true} className="h-2/4"/>;
            </div>
        </div>
    );
};

export default Error;