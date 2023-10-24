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

export const SideMenuList = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard/ecommerce",
        Icon: AiFillHome,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "eCommerce",
                path: "/dashboard/ecommerce",
                Icon: HiOutlineShoppingCart,
            },
            {
                title: "Analytics",
                path: "/dashboard/analytics",
                Icon: IoBarChartOutline,
            },
        ]
    },
    {
        id: 2,
        title: "Email ",
        path: "/dashboard/email",
        Icon: AiOutlineMail,
    },
    {
        id: 3,
        title: "Chat",
        path: "/dashboard/chat",
        Icon: BsChatSquareDots,
    },
    {
        id: 4,
        title: "Todo",
        path: "/dashboard/todo",
        Icon: IoCheckboxOutline,
    },
    {
        id: 5,
        title: "email Dashboard",
        path: "/dashboard/#",
        Icon: AiOutlineMail,
    },
    {
        id: 6,
        title: "calender",
        path: "/dashboard/calender",
        Icon: RiTodoLine,
    },
    {
        id: 7,
        title: "invoice Dashboard",
        path: "#",
        Icon: AiOutlineContainer,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Full List",
                path: "/dashboard/fullList",
                Icon: HiOutlineClipboardDocumentList,
            },
            {
                title: "Preview",
                path: "/dashboard/preview",
                Icon: HiOutlineViewfinderCircle,
            },
            {
                title: "Edit",
                path: "/dashboard/edit",
                Icon: BiEdit,
            },
            {
                title: "Add",
                path: "/dashboard/add",
                Icon: GrAddCircle,
            },
        ]
    },
    {
        id: 8,
        title: "Roles & Permission",
        path: "#",
        Icon: BsFillShieldFill,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Roles",
                path: "/dashboard/roles",
                Icon: GrUserSettings,
            },
            {
                title: "Permission",
                path: "/dashboard/permission",
                Icon: MdLockPerson,
            },
        ]
    },
    {
        id: 9,
        title: "eCommerce Shops",
        path: "#",
        Icon: FaCartShopping,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Shops",
                path: "/dashboard/shops",
                Icon: GiShoppingCart,
            },
            {
                title: "WishList",
                path: "/dashboard/wishlist",
                Icon: TbJewishStar,
            },
            {
                title: "Details",
                path: "/dashboard/details",
                Icon: TbListDetails,
            },
            {
                title: "Checkbox",
                path: "/dashboard/checkbox",
                Icon: BsCheck2Square,
            },
        ]
    },
    {
        id: 10,
        title: "Users",
        path: "#",
        Icon: BiSolidUser,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "List",
                path: "/dashboard/list",
                Icon: HiOutlineUserGroup,
            },
            {
                title: "View",
                path: "/dashboard/view",
                Icon: FaUsersViewfinder,
            },
        ]
    },
    {
        id: 11,
        title: "Pages",
        path: "#",
        Icon: SiPowerpages,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Profile",
                path: "/dashboard/profile",
                Icon: BsPerson,
            },
            {
                title: "FAQ",
                path: "/dashboard/faq",
                Icon: FaQuoteRight,
            },
        ]
    },
    {
        id: 12,
        title: "Authentication",
        path: "#",
        Icon: BsPersonCheck,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "log In",
                path: "/dashboard/login",
                Icon: BiLogInCircle,
            },
            {
                title: "Sign Out",
                path: "/dashboard/signOut",
                Icon: TbLogin,
            },
        ]
    },
    {
        id: 13,
        title: "Modal Example",
        path: "/dashboard/modalExample",
        Icon: CgShapeSquare,
    },
    {
        id: 14,
        title: "Charts",
        path: "#",
        Icon: BsFillPieChartFill,
        openIcon: RiArrowDownSFill,
        closeIcon: RiArrowUpSFill,
        subNav: [
            {
                title: "Apex",
                path: "/dashboard/apex",
                Icon: CgShapeCircle,
            },
            {
                title: "Lotto",
                path: "/dashboard/lotto",
                Icon: CgShapeCircle,
            },
            {
                title: "charts js",
                path: "/dashboard/chartsjs",
                Icon: BiChart,
            },
            {
                title: "Recharts",
                path: "/dashboard/recharts",
                Icon: MdSsidChart,
            },
        ]
    },
]

