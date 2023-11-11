
const CountryInfo = ({ flag, CountryTitle, amount, CountryName, Icon, iconColor, iconPosition, percent, percentColor }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="">
                    <span className={`${flag} flag-icon md:w-9 w-8 h-8 md:h-9 rounded-3xl`} title={CountryTitle}></span>
                </div>
                <div>
                    <h3 className="text-lg font-semibold leading-none">{amount}</h3>
                    <p className="text-xs">{CountryName}</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <Icon className={`${iconColor} text-lg font-semibold ${iconPosition}`} />
                <h3 className={`${percentColor} text-lg font-semibold`}>{percent}</h3>
            </div>
        </div>
    );
};

export default CountryInfo;