import Breadcrumb from '@/components/module/breadcrump/Breadcrumb'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";



const UserCart = () => {
    const locale = useLocale()
    const products = new Array(4).fill('')
  return (
    <div>
        
        {/* container */}
        <div className='px-16'>

            {/* Breadcrumb */}
                <div className="my-5 xs:mt-10 xs:mb-8">
                <Breadcrumb
                    homeElement={locale === "en" ? "Home" : "خانه"}
                    separator="/"
                    containerClasses="breadcrumbs"
                    listClasses="breadcrumb-item"
                    activeClasses="active"
                    capitalizeLinks={true}
                />
                </div>

                {/* title page */}
                <div >
                    <p className='text-2xl font-medium text-center'>Shopping Cart</p>
                </div>
                <hr className='my-7 h-[2px] bg-black'/>

                <div className='grid grid-cols-3  py-10'>

                        {/* product items content */}
                        <div className=' child:mt-7 col-span-2'>

                            {/* product box item */}
                            {
                                products.map(product=>(
                                    <div className='flex  items-center justify-evenly bg-[#F5F5F5] drop-shadow-lg rounded p-2  h-[100px] ' >
                                        <div className=''>
                                            <Image src="/assets/pics_products/p_6.png" width={1000} height={500} alt='product image' className='w-[120px] h-[90px] object-cover' />
                                        </div>
                                        <div className='h-full flex flex-col  items-start justify-between ps-10 child:text-sm child:font-medium'>
                                            <div > Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nam, dolorum? </div>
                                            <div>
                                                <span>price : 2300$</span>
                                            </div>
                                            <div className='flex items-center '> 
                                                <button><FaPlus /></button>
                                                <span className='ms-3 text-xl'>0</span>
                                                <button className='ms-3'><FaRegWindowMinimize /></button>
                                            </div>
                                        </div>
                                        <div className='p-5 rounded-full bg-primary2 shadow-lg cursor-pointer hover:bg-primary transition-all duration-150 hover:text-primary2   ms-auto'>
                                            <FaTrashCan className='text-xl ' />
                                        </div>
                        </div>
            ))
        }



                        </div>

                        {/* payment content */}
                        <div className='p-10'>
                            <div className='bg-[#F5F5F5] py-10 drop-shadow-lg'>
                            <div className='text-center mt-7 child:text-3xl'>
                                <div className=''>Total :</div>
                                <div className='mt-7 font-semibold'>
                                    <span>$</span>
                                    <span>2500</span>
                                </div>
                            </div>

                            <div className='mt-10 flex items-center justify-center'>
                                <button className='bg-green-500 py-2 px-16 rounded text-white flex items-center justify-center'>
                                    <span>Payment</span>
                                    <MdArrowRightAlt className='text-2xl ms-2' />
                                </button>
                            </div>
                            </div>
                        </div>

                </div>
                

        </div>

    </div>
  )
}

export default UserCart