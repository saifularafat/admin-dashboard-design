import { NavMenuList } from "./Nav";

const SideBar = () => {
    // const NavMenuList =[];
    return (
        <div className="fixed bg-white left-0 top-0 bottom-0 overflow-y-auto px-4 text-black">
           <ul> 
            {
                NavMenuList.map(({id, title, path, Icon}) => <li key={id}
                className="py-2"
                >{title}</li>)
            }
            
           </ul>
        </div>
    );
};

export default SideBar;