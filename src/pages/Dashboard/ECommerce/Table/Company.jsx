
const Company = ({ name, desc, icons }) => {
    return (
        <div className="flex items-center gap-7">
            <span className="w-10 h-10 rounded-xl shadow bg-slate-300 text-2xl flex justify-center items-center cursor-pointer">{icons}</span>
            <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-xs font-normal normal-case">{desc}</p>
            </div>
        </div>
    );
};

export default Company;