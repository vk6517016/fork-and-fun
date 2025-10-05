import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiIndiaGate } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";


const Categories = [
    {
        id:1,
        name:"All Category",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:2,
        name:"BreakFast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:3,
        name:"Chinese",
        icon:<GiBowlOfRice className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:4,
        name:"Main Course",
        icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:5,
        name:"North Indian",
        icon:<GiIndiaGate className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:6,
        name:"South Indian",
        icon:<GiHotMeal className="w-[60px] h-[60px] text-orange-500" />

    },
    {
        id:7,
        name:"Desserts",
        icon:<FaIceCream className="w-[60px] h-[60px] text-orange-500" />
    },
]

export default Categories