import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SidebarLink = styled(Link)`
@apply flex items-center justify-between p-5 list-none h-16 no-underline text-lg text-blue-500;

&:hover {
  @apply bg-gray-800 border-l-4 border-indigo-600 cursor-pointer;
}`;

const SubMenu = ({ item }) => {
  console.log(item.icons);
  const [isSubNav, setSubNav] = useState(false);

  return (
    <>
       <Link
        to={item.path} 
        onClick={() => item.subNav && setSubNav(!isSubNav)}
        className="flex items-center justify-between p-3 list-none  hover:bg-primary hover:rounded-lg font-semibold md:hover:pl-7 hover:pl-3 hover:shadow-lg duration-300 transition-all cursor-pointer"
        >
        <div className="flex items-center gap-3">
          <div className="text-2xl">
            <item.icons />
          </div>
          <span className="">{item.title}</span>
        </div>
      </Link>
    </>
  );
};

export default SubMenu;