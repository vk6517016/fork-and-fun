import React from 'react'
import { FaCarrot } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cardSlice';
import { toast } from 'react-toastify';


const CategoryCard = ({id, name, image, price, type}) => {
  let dispatch=useDispatch()

  let cartItemlist = {
    id:id,
    name:name,
    price:price,
    image:image,
    qty:1
  }

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-orange-300 cursor-pointer'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='text-2xl font-semibold text-gray-700'>
            {name}
        </div>
        <div className='w-[100%] flex justify-between items-center'>
            <div className='text-lg font-bold text-orange-500'>₹ {price}/-</div>
            <div className='flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold'>
              {type === 'veg'?<FaCarrot />: <GiChickenOven />} <span>{type}</span></div>
        </div>
        <button className='w-full p-3 rounded-lg bg-orange-500 text-white hover:bg-orange-700 transition-all cursor-pointer' onClick={()=>{dispatch(AddItem(cartItemlist)); toast.success("Item added successfully")}}>Add to dish</button>
    </div>
  )
}

export default CategoryCard