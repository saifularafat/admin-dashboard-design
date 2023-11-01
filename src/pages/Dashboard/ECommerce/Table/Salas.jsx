
const Salas = ({percent, Icon, color}) => {
    return (
        <div className="flex items-center justify-center gap-3">
            <h2 className="text-lg font-medium text-accent">{percent}</h2>
            <Icon className={`${color} w-7 h-7`} />
        </div>
    );
};

export default Salas;