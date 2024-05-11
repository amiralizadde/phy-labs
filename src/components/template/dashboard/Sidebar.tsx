import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { userType } from '@/types/authTypes'

type SidebarPropsType={
  user:userType
}

const Sidebar =async ({user}:SidebarPropsType) => {
  const locale = useLocale()
    
  return (
    <div className='min-h-screen p-5 child:mt-8 child:cursor-pointer'>
        <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/dashboard/infoUser`} className='font-bold'>  اطلاعات حساب کاربری  </Link>
        </div>
        <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/dashboard/orders`} className='font-bold'>  سفارشات  </Link>
        </div>
        {
          user.role === "ADMIN" && (
          <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/p-admin`} className='font-bold'>  پنل ادمین  </Link>
        </div>
          )
        }
        <div className=''>
            <button className='hover:scale-110 transition-all duration-200 font-bold  py-2 px-7 bg-primary text-white text-sm'> خروج از حساب </button>
        </div>
    </div>
  )
}

export default Sidebar