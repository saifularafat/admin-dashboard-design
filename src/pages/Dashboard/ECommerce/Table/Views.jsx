
const Views = ({money, time}) => {
    return (
        <div className="">
            <h3  className="text-lg font-semibold leading-none">{money}</h3>
            <span className="text-xs normal-case">{time}</span>
        </div>
    );
};

export default Views;