import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../Categories'
import CategoryCard from '../components/CategoryCard'
import {food_items} from '../food'
import { useContext, useState } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux';
import { TbShoppingCartOff } from "react-icons/tb";
import { MdSearchOff } from "react-icons/md";
import { toast } from 'react-toastify';


const Home = () => {
  let {cate, setCategory, input, showCart, setShowCart}=useContext(dataContext)
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  // Filter Product Card according to category
  function filter(category) {
    setSelectedCategory(category);
    if (category === "All Category") {
      setCategory(food_items)
    } else {
      let filterCategory = food_items.filter((item) => (item.food_category === category))
      setCategory(filterCategory)
    }
  }

  let items = useSelector(state=>state.cart)

  let subTotal = items.reduce((total, item) => total+item.qty*item.price,0);
  let deliveryFee = 40;
  let taxes = subTotal*0.5/100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Nav />

        {/* Categories Filter Section */}
        {
        !input ? (
          <div className='w-[100%] p-5 overflow-hidden'>
            <div className='flex flex-nowrap overflow-x-auto justify-start items-center gap-5 sm:flex-wrap sm:justify-center sm:overflow-x-visible scrollbar-hide'>
              {Categories.map((item, index) => {
                return (
                  <div 
                    key={index}
                    className={`w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 justify-center text-[16px] font-bold text-gray-600 rounded-lg shadow-xl hover:bg-orange-200 cursor-pointer transition-all duration-200 flex-shrink-0 snap-center sm:snap-none ${
                      item.name === selectedCategory ? 'bg-orange-300 border-2 border-orange-500' : ''
                    }`} 
                    onClick={() => filter(item.name)}
                  > 
                    {item.icon}
                    {item.name}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null
        }
  

        {/* Food Items Display */}
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-[6rem]'>
          {cate.length>1?cate.map((item) => (
            <CategoryCard 
              key={item.id}
              id={item.id} 
              name={item.food_name} 
              image={item.food_image} 
              price={item.price} 
              type={item.food_type} 
            />
          )):
            <div className='flex justify-center items-center w-[100%] p-5'>
              <div className='w-full max-w-sm bg-white rounded-lg shadow-xl p-8 text-center mx-auto'>
                <MdSearchOff className='w-24 h-24 text-orange-400 mx-auto mb-4 font-bold' />
                <p className='text-xl text-orange-600 font-bold'>No dish found</p>
              </div>
            </div>
          }
        </div>

        <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 tansition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
          <header className='w-[100%] flex justify-between items-center'>
            <span className='text-orange-500 text-[18px] font-bold'>Order Items</span>
            <RxCross2 className='w-[30px] h-[30px] text-orange-500 text-[18px] font-bold cursor-pointer hover:text-gray-600' onClick={() =>{
              setShowCart(false);
            }} />
          </header>

          {items.length>0?<>
          <div className='w-full mt-9 flex flex-col gap-8'>
              {items.map((item) => (
                <CartCard key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
              ))}
          </div>
          <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-4 p-8 border-b-2'>
              <div className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>SubTotal</span>
                  <span className='text-orange-400 text-lg font-bold'>₹ {subTotal}/-</span>
              </div>
              
              <div className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                  <span className='text-orange-400 text-lg font-bold'>₹ {deliveryFee}/-</span>
              </div>

              <div className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                  <span className='text-orange-400 text-lg font-bold'>₹ {taxes}/-</span>
              </div>
          </div>    
          <div className='w-full flex justify-between items-center p-6'>
              <span className='text-2xl text-gray-600 font-bold'>Total</span>
              <span className='text-orange-400 text-2xl font-bold'>₹ {total}/-</span>
          </div>

          <button className='w-[80%] p-3 rounded-lg bg-orange-500 text-white hover:bg-orange-400 transition-all cursor-pointer' onClick={() => {toast.success("Order Placed Successfully....")}}>
              Place Order
          </button>
          </>: 
          <div className='flex-1 flex flex-col justify-center items-center mt-9'>
            <TbShoppingCartOff className='w-24 h-24 md:w-32 md:h-32 text-orange-400 mb-4' />
            <p className='text-center text-orange-500 text-lg md:text-xl font-bold'>Cart is empty!</p>
          </div>
          }
                
        </div>

        <Footer />
    </div>
  )
}

export default Home