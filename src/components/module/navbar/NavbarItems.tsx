"use client"
import React, { useState } from 'react'
import { menuTypes } from '@/types/menuTypes'
import { MdArrowForwardIos } from "react-icons/md";
import NavbarSubroutes from './NavbarSubroutes';


type  NavbarItemsProps = {
    menuItem : menuTypes
}

const NavbarItems = ({menuItem}:NavbarItemsProps) => {
    const [isShowSubroutes , setIsShowSubroutes] = useState<boolean>(false)
  return (
    <>
    <li className='py-4 border-b border-b-black/25 mx-2'>
        <p className='flex items-center  font-medium' onClick={()=>setIsShowSubroutes(!isShowSubroutes)}> 
            <span>{menuItem.menuTitle}</span>
             {menuItem.category && <MdArrowForwardIos className={`${isShowSubroutes && 'rotate-90'} text-sm transition-all duration-200 text-primary  mx-2`} />}
        </p>
        {isShowSubroutes && menuItem.category && (
        <ul className='bg-gray-300/50 py-2 my-2 me-5 rounded-md child:py-1'>
            {menuItem.category?.map(categoryItem=>(
                <NavbarSubroutes key={categoryItem.id} productsItem={categoryItem} />
            ))}
        </ul>
        )}
    </li>
    </>
  )
}

export default NavbarItems