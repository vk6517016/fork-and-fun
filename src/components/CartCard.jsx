import React from 'react'
import image1 from '../assets/upma.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cardSlice';
import { toast } from 'react-toastify';


const CartCard = ({name,id,price,image,qty}) => {
    let dispatch = useDispatch()

  return (
    <div className='w-full h-[160px] p-2 shadow-xl rounded-lg pt-5 flex justify-between'>
        <div className='w-[60%] h-full flex gap-5'> 
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover h-[136px]' />
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-orange-300 text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-orange-400 hover:bg-gray-200' onClick={() => {qty>1?dispatch(DecrementQty(id)):1}}>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-orange-400'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-orange-400 hover:bg-gray-200 cursor-pointer' onClick={() => {qty<5?dispatch(IncrementQty(id)):5}}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-8 pr-5'>
            <span className='text-xl text-orange-400 font-semibold'>₹ {price}/-</span>
            <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-500 cursor-pointer' onClick={() => {dispatch(RemoveItem(id)); toast.success("Item remove successfully...")}} />
        </div>
    </div>
  )
}

export default CartCard