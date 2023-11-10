import useTheme from "../../Shared/useTheme";

const RightSupport = () => {
    const {isDarkMode} = useTheme() 
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-accent shadow-2xl p-5 overflow-hidden rounded-xl`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod voluptate, explicabo deleniti iusto voluptas eveniet saepe facere numquam aut doloremque.</p>
        </div>
    );
};

export default RightSupport;