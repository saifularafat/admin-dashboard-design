import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const SubMenu = ({ item }) => {
  const [isSubNav, setSubNav] = useState(false);

  return (
    <>
      <Link
        to={item?.path}
        onClick={() => item.subNav && setSubNav(!isSubNav)}
        className="flex items-center justify-between h-14 p-3 list-none  hover:bg-primary hover:rounded-lg font-semibold md:hover:pl-7 hover:pl-3 hover:shadow-lg hover:text-slate-900 duration-300 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="text-2xl">
            <item.icons />
          </div>
          <span className="">{item?.title}</span>
        </div>
        {item.subNav && isSubNav
          ? <RiArrowDownSFill className="text-xl" />
          : item.subNav
            ? <RiArrowUpSFill className="text-xl" />
            : null}
      </Link>
      <div className="ml-7 bg-slate-700/25 rounded-lg">
        {
          isSubNav && item?.subNav.map((subItem, index) => {
            return (
              <Link key={index} to={subItem?.path} className="">
                <div className="flex items-center gap-3 p-3 hover:bg-primary rounded-lg space-y-2">
                  <div className="text-2xl text-white"> 
                    <subItem.icons />
                  </div>
                  <span className="text-lg font-medium">{subItem?.title}</span>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  );
};

export default SubMenu;