import LeftReport from "./LeftReport";
import RightSupport from "./RightSupport";

const SecondSection = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="left_site">
                <LeftReport />
            </div>
            <div className="right_site">
                <RightSupport />
            </div>
        </div>
    );
};

export default SecondSection;