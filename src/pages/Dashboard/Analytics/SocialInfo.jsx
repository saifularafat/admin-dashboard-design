const SocialInfo = ({ iconBg, Icon, iconColor, title, amount, percent, percentColor }) => {
    return (
        <div className=" py-2">
            <div className="flex items-center justify-between space-y-4">
                <div className="flex items-center gap-3">
                    <div className={`${iconBg} rounded-lg p-2`}>
                        <Icon className={`${iconColor} text-xl font-semibold`} />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`text-lg font-semibold text-slate-600`}>{amount}</span>
                    <span className={`${percentColor} text-lg font-semibold`}>{percent}</span>
                </div>
            </div>
        </div>
    );
};

export default SocialInfo;