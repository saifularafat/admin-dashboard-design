import { FaBook } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import officeImage from "./../../../assets/office.png"
import user4 from "./../../../assets/pic1.png"
import user3 from "./../../../assets/pic2.png"
import user2 from "./../../../assets/pic3.png"
import user1 from "./../../../assets/pic4.png"
const RightOffice = () => {
    return (
        <>
            <div className="h-60 w-full bg-teal-100">
                <img src={officeImage} alt="office image" className="w-full h-full object-cover" />
            </div>
            {/* second step */}
            <div className="pt-5 flex text-accent">
                <div className="pr-4 border-0 border-r border-solid border-gray-400">
                    <div className="pl-3 font-medium">
                        <h4 className="text-lg leading-none">wed</h4>
                        <span className="text-2xl pl-2">29</span>
                    </div>
                </div>
                <div className="pl-4 text-accent">
                    <h3 className="font-semibold">Developer Meetup</h3>
                    <p className="text-xs">Meet world popular developers</p>
                </div>
            </div>
            {/* Third Step */}
            <div className="pl-5 mt-9">
                <div className="flex items-center gap-5">
                    <div className="bg-blue-200 rounded-lg p-[6px]">
                        <FaBook className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-accent">
                        <h3 className=" font-medium">Sat, May 25, 2020</h3>
                        <p className="text-sm">10:AM To 6:PM</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-6">
                    <div className="bg-slate-200 rounded-lg p-[6px]">
                        <MdLocationOn className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-accent">
                        <h3 className=" font-medium">Central Park</h3>
                        <p className="text-sm">Manhattan, New York City</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-6">
                    <div className="bg-slate-200 rounded-lg p-[6px]">
                        <BiSolidPhoneCall className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-accent">
                        <h3 className=" font-medium">Contact us</h3>
                        <p className="text-sm">+000 00 000 000 00 0</p>
                    </div>
                </div>
            </div>
            {/* Four and image */}
            <div className="flex items-center mt-12 pl-9">
                <div className="images flex">
                    <img src={user1} alt="user image" className="images_style" />
                    <img src={user2} alt="user image" className="images_style" />
                    <img src={user3} alt="user image" className="images_style" />
                    <img src={user1} alt="user image" className="images_style" />
                    <img src={user4} alt="user image" className="images_style" />
                </div>
                <p className="text-accent font-normal tracking-wider pl-2">+76</p>
            </div>
        </>
    );
};

export default RightOffice;