import { AiFillHome, AiOutlineContainer, AiOutlineMail } from 'react-icons/ai';
import { IoBarChartOutline, IoCheckboxOutline } from 'react-icons/io5';
import { BiChart, BiEdit,BiLogInCircle,BiSolidUser } from 'react-icons/bi';
import { RiArrowDownSFill, RiArrowUpSFill, RiTodoLine } from 'react-icons/ri';
import { BsChatSquareDots, BsCheck2Square, BsFillPieChartFill, BsFillShieldFill, BsPerson, BsPersonCheck } from 'react-icons/bs';
import { FaCartShopping, FaQuoteRight, FaUsersViewfinder } from 'react-icons/fa6';
import { HiOutlineShoppingCart, HiOutlineUserGroup } from 'react-icons/hi';
import { GrAddCircle, GrUserSettings } from 'react-icons/gr';
import { HiOutlineClipboardDocumentList, HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { MdLockPerson, MdSsidChart } from 'react-icons/md';
import { GiShoppingCart } from 'react-icons/gi';
import { TbJewishStar, TbListDetails, TbLogin } from 'react-icons/tb';
import { SiPowerpages } from 'react-icons/si';
import { CgShapeCircle, CgShapeSquare } from 'react-icons/cg';

export const SidebarData = [
    {
        id: 1,
        title: "Dashboard",
        path: "#",
       icons:AiFillHome,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "eCommerce",
                path: "/dashboard/ecommerce",
               icons: HiOutlineShoppingCart,
            },
            {
                title: "Analytics",
                path: "/dashboard/analytics",
               icons: IoBarChartOutline,
            },
        ]
    },
    {
        id: 2,
        title: "Email ",
        path: "/dashboard/email",
       icons: AiOutlineMail,
    },
    {
        id: 3,
        title: "Chat",
        path: "/dashboard/chat",
       icons: BsChatSquareDots,
    },
    {
        id: 4,
        title: "Todo",
        path: "/dashboard/todo",
       icons: IoCheckboxOutline,
    },
    {
        id: 5,
        title: "email Dashboard",
        path: "/dashboard/#",
       icons: AiOutlineMail,
    },
    {
        id: 6,
        title: "calender",
        path: "/dashboard/calender",
       icons: RiTodoLine,
    },
    {
        id: 7,
        title: "invoice Dashboard",
        path: "#",
       icons: AiOutlineContainer,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Full List",
                path: "/dashboard/fullList",
               icons: HiOutlineClipboardDocumentList,
            },
            {
                title: "Preview",
                path: "/dashboard/preview",
               icons: HiOutlineViewfinderCircle,
            },
            {
                title: "Edit",
                path: "/dashboard/edit",
               icons: BiEdit,
            },
            {
                title: "Add",
                path: "/dashboard/add",
               icons: GrAddCircle,
            },
        ]
    },
    {
        id: 8,
        title: "Roles & Permission",
        path: "#",
       icons: BsFillShieldFill,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Roles",
                path: "/dashboard/roles",
               icons: GrUserSettings,
            },
            {
                title: "Permission",
                path: "/dashboard/permission",
               icons: MdLockPerson,
            },
        ]
    },
    {
        id: 9,
        title: "eCommerce Shops",
        path: "#",
       icons: FaCartShopping,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Shops",
                path: "/dashboard/shops",
               icons: GiShoppingCart,
            },
            {
                title: "WishList",
                path: "/dashboard/wishlist",
               icons: TbJewishStar,
            },
            {
                title: "Details",
                path: "/dashboard/details",
               icons: TbListDetails,
            },
            {
                title: "Checkbox",
                path: "/dashboard/checkbox",
               icons: BsCheck2Square,
            },
        ]
    },
    {
        id: 10,
        title: "Users",
        path: "#",
       icons: BiSolidUser,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "List",
                path: "/dashboard/list",
               icons: HiOutlineUserGroup,
            },
            {
                title: "View",
                path: "/dashboard/view",
               icons: FaUsersViewfinder,
            },
        ]
    },
    {
        id: 11,
        title: "Pages",
        path: "#",
       icons: SiPowerpages,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Profile",
                path: "/dashboard/profile",
               icons: BsPerson,
            },
            {
                title: "FAQ",
                path: "/dashboard/faq",
               icons: FaQuoteRight,
            },
        ]
    },
    {
        id: 12,
        title: "Authentication",
        path: "#",
       icons: BsPersonCheck,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "log In",
                path: "/dashboard/login",
               icons: BiLogInCircle,
            },
            {
                title: "Sign Out",
                path: "/dashboard/signOut",
               icons: TbLogin,
            },
        ]
    },
    {
        id: 13,
        title: "Modal Example",
        path: "/dashboard/modalExample",
       icons: CgShapeSquare,
    },
    {
        id: 14,
        title: "Charts",
        path: "#",
       icons: BsFillPieChartFill,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Apex",
                path: "/dashboard/apex",
               icons: CgShapeCircle,
            },
            {
                title: "Lotto",
                path: "/dashboard/lotto",
               icons: CgShapeCircle,
            },
            {
                title: "charts js",
                path: "/dashboard/chartsjs",
               icons: BiChart,
            },
            {
                title: "Recharts",
                path: "/dashboard/recharts",
               icons: MdSsidChart,
            },
        ]
    },
]

