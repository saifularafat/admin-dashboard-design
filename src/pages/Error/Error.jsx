import { Link } from "react-router-dom";
import Theme from "../Shared/Theme";

const Error = () => {
    const { isDarkMode } = Theme();
    return (
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-blue-100 text-slate-800'}  h-screen overflow-hidden flex items-center justify-center text-accent`}>
            <div className=" ">
                <h2>404 Error</h2>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>

        </div>
    );
};

export default Error;