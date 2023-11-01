import Theme from "../../../Shared/Theme";
import Category from "./Category";
import Company from "./Company";
import { RiComputerLine } from 'react-icons/ri';
import { LiaCarSideSolid } from 'react-icons/lia';
import {AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import Views from "./Views";
import Revenue from "./Revenue";
import Salas from "./Salas";

const Table = () => {
    const { isDarkMode } = Theme();
    return (
        <table className="min-w-[800px] w-full">
            <thead className={`${isDarkMode ? 'bg-slate-900' : 'bg-slate-500 text-gray-300'}`}>
                <th className="th__style">Company</th>
                <th className="th__style">Category</th>
                <th className="th__style">Views</th>
                <th className="th__style">Revenue</th>
                <th className="th__style">Salas</th>
            </thead>
            <tbody className="text-accent ">
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="Rave" desc="rave@gmail.com" icons={"💼"} /></td>
                    <td className="py-3 px-10"><Category Icon={RiComputerLine} name="Technology" bgColor="bg-blue-300" color="text-blue-500"/></td>
                    <td className="py-3 px-10"><Views money='58.9K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$637.1" /></td>
                    <td className="py-3 px-10"><Salas percent="55%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold">
                    <td className="py-3 px-10"><Company name="Pere" desc="pere@gmail.com" icons={"🪂"} /></td>
                    <td className="py-3 px-10"><Category Icon={LiaCarSideSolid} name="Grocery" bgColor="bg-slate-300" color="text-accent"/></td>
                    <td className="py-3 px-10"><Views money='58.9K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$637.1" /></td>
                    <td className="py-3 px-10"><Salas percent="45%" Icon={AiOutlineFall} color="text-red-500" /></td>
                </tr>
               
            </tbody>
        </table>
    );
};

export default Table;