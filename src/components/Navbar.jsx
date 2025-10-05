import React, {useContext, useEffect} from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux'

const Navbar = () => {
  let {input,setInput, cate, setCategory, showCart, setShowCart} = useContext(dataContext)

  useEffect(() => {
    let searchList = food_items.filter((item) => item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
    setCategory(searchList)
  },[input])

  let items = useSelector(state=>state.cart)

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-'>
            <MdFastfood className='w-[30px] h-[30px] text-orange-500'/>
        </div>
        <form className='w-[45%] h-[60px] bg-white flex items-center px-5 rounded-md shadow-md md:w-[70%] relative'
          onSubmit={(e) => e.preventDefault()}
        >
            <input 
              type='text' 
              placeholder='Search your dish.....' 
              className='w-[100%] outline-none text-sm text-grey-500 placeholder:text-sm placeholder:text-grey-500 md:text-base pr-10'
              onChange={(e) => setInput(e.target.value)}  value={input}
            />
            <FaSearch className='text-orange-500 w-[20px] h-[20px] absolute right-5 top-1/2 -translate-y-1/2'/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer' onClick={() => {
          setShowCart(true)
        }}>
            <span className='absolute top-0 right-2 text-orange-500 font-bold text-[18px]'>{items.length}</span>
            <LuShoppingBag className='w-[30px] h-[30px] text-orange-500' />
        </div>
    </div>
  )
}

export default Navbar