import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { userType } from '@/types/authTypes'
import { AiFillProduct } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";


type SidebarPropsType={
  user:userType
}

const Sidebar =async ({user}:SidebarPropsType) => {
  const locale = useLocale()
    
  return (
    <div className='min-h-screen p-5 child:mt-8 child:cursor-pointer'>
        <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/p-admin/products`} className='font-medium text-lg flex items-center'>  
            <AiFillProduct />
            <span className='ms-2'>Products</span>
             </Link>
        </div>
        <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/p-admin/news`} className='font-medium text-lg flex items-center'>  
            <IoNewspaper />
            <span className='ms-2'>News</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar