import useTheme from "../../Shared/useTheme";
import MonthlyCampaignState from "./MonthlyCampaignState";
import SalesByCountries from "./SalesByCountries";
import TotalEarning from "./TotalEarning";

const ThreeSection = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
            <div className="left site">
                <SalesByCountries />
            </div>
            <div className="middle site">
                <TotalEarning />
            </div>
            <div className="right site">
                <MonthlyCampaignState />
            </div>
        </div>
    );
};

export default ThreeSection;