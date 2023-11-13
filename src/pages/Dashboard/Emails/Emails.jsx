import EmailLeftSite from "./EmailLeftSite/EmailLeftSite";
import EmailRightSite from "./EmailRightSite/EmailRightSite";

const Emails = () => {
    
    return (
        <div className="grid grid-cols-3 md:grid-cols-8 gap-[2px] mt-2 w-full py-2">
            <div className={`col-span-1 md:col-span-2`}>
                <EmailLeftSite />
            </div>
            <div className={`col-span-2 md:col-span-6`}>
                <EmailRightSite />
            </div>
        </div>
    );
};

export default Emails;