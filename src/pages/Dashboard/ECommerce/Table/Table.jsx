import Theme from "../../../Shared/Theme";
import Category from "./Category";
import Company from "./Company";
import { RiComputerLine } from 'react-icons/ri';

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
                <tr className="border border-solid border-b border-slate-300 font-semibold">
                    <td className="py-3 px-10"><Company name="Rave" desc="rave@gmail.com" icons={"💼"} /></td>
                    <td className="py-3 px-10"><Category Icon={RiComputerLine} name="Technology" bgColor="bg-blue-300" color="text-blue-500"/></td>
                    
                </tr>
            </tbody>
        </table>
    );
};

export default Table;