import EmailLeftSite from "./EmailLeftSite/EmailLeftSite";
import EmailRightSite from "./EmailRightSite/EmailRightSite";

const Emails = () => {
    
    return (
        <div className="grid grid-cols-3 md:first-letter:grid-cols-5 gap-3 py-2">
            <div className={`col-span-2 md:grid-cols-3`}>
                <EmailLeftSite />
            </div>
            <div className={`col-span-1 md:grid-cols-2`}>
                <EmailRightSite />
            </div>
        </div>
    );
};

export default Emails;