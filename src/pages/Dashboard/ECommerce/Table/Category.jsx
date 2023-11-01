
const Category = ({Icon, name, bgColor, color}) => {
    return (
        <div className="flex items-center gap-4">
            <span className={`${bgColor} ${color} w-10 h-10 p-1 flex justify-center items-center rounded-lg`}><Icon className='w-8 h-8'/></span>
            <h3 className="font-medium text-base">{name}</h3>
        </div>
    );
};

export default Category;