import Theme from "../../../Shared/Theme";
import Category from "./Category";
import Company from "./Company";
import { RiComputerLine, RiLuggageCartFill } from 'react-icons/ri';
import { LiaCarSideSolid } from 'react-icons/lia';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import { TbMeat } from 'react-icons/tb';
import { FaBook, FaBottleWater } from 'react-icons/fa6';
import { MdSportsScore } from 'react-icons/md';
import { SiStartrek } from 'react-icons/si';
import { PiCarProfileLight, PiCarProfileThin } from 'react-icons/pi';
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
                    <td className="py-3 px-10"><Category Icon={RiComputerLine} name="Technology" bgColor="bg-blue-200" color="text-blue-500" /></td>
                    <td className="py-3 px-10"><Views money='58.9K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$637.1" /></td>
                    <td className="py-3 px-10"><Salas percent="55%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold">
                    <td className="py-3 px-10"><Company name="Pere" desc="pere@gmail.com" icons={"🪂"} /></td>
                    <td className="py-3 px-10"><Category Icon={LiaCarSideSolid} name="Grocery" bgColor="bg-slate-300" color="text-accent" /></td>
                    <td className="py-3 px-10"><Views money='38.3K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$437.5" /></td>
                    <td className="py-3 px-10"><Salas percent="45%" Icon={AiOutlineFall} color="text-red-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="PangFish" desc="fish@gmail.com" icons={"🐧"} /></td>
                    <td className="py-3 px-10"><Category Icon={TbMeat} name="Fish Eat" bgColor="bg-orange-100" color="text-orange-300" /></td>
                    <td className="py-3 px-10"><Views money='42.7K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$477.0" /></td>
                    <td className="py-3 px-10"><Salas percent="51%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="WaterBotel" desc="botel@gmail.com" icons={"🌊"} /></td>
                    <td className="py-3 px-10"><Category Icon={FaBottleWater} name="Water Botel" bgColor="bg-blue-100" color="text-blue-400" /></td>
                    <td className="py-3 px-10"><Views money='62.7K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$587.3" /></td>
                    <td className="py-3 px-10"><Salas percent="58%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="BookPan" desc="pann@gmail.com" icons={"📚"} /></td>
                    <td className="py-3 px-10"><Category Icon={FaBook} name="Book & Pan" bgColor="bg-sky-200" color="text-green-500" /></td>
                    <td className="py-3 px-10"><Views money='45.3K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$287.3" /></td>
                    <td className="py-3 px-10"><Salas percent="49%" Icon={AiOutlineFall} color="text-red-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="SK Sport" desc="sk@gmail.com" icons={"🏏"} /></td>
                    <td className="py-3 px-10"><Category Icon={MdSportsScore} name="Sports" bgColor="bg-indigo-200" color="text-red-700" /></td>
                    <td className="py-3 px-10"><Views money='40.1K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$312.9" /></td>
                    <td className="py-3 px-10"><Salas percent="53%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="Start" desc="start@gmail.com" icons={"⭐"} /></td>
                    <td className="py-3 px-10"><Category Icon={SiStartrek} name="Start" bgColor="bg-green-100" color="text-blue-300" /></td>
                    <td className="py-3 px-10"><Views money='37.5K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$212.9" /></td>
                    <td className="py-3 px-10"><Salas percent="41%" Icon={AiOutlineFall} color="text-red-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="ShowsRow" desc="shows@gmail.com" icons={"👟"} /></td>
                    <td className="py-3 px-10"><Category Icon={PiCarProfileLight} name="Shows" bgColor="bg-yellow-100" color="text-green-700" /></td>
                    <td className="py-3 px-10"><Views money='49.9K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$477.1" /></td>
                    <td className="py-3 px-10"><Salas percent="62%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
                <tr className="border border-solid border-b border-slate-300 font-semibold ">
                    <td className="py-3 px-10"><Company name="MusicPast" desc="music@gmail.com" icons={"🎶"} /></td>
                    <td className="py-3 px-10"><Category Icon={PiCarProfileThin} name="Music" bgColor="bg-blue-100" color="text-sky-400" /></td>
                    <td className="py-3 px-10"><Views money='59.0K' time="in 24 hours" /></td>
                    <td className="py-3 px-10"><Revenue amount="$498.9" /></td>
                    <td className="py-3 px-10"><Salas percent="55%" Icon={AiOutlineRise} color="text-blue-500" /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;