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
            <Link href={`/${locale}/p-admin/products`} className='font-medium text-xl'>  Products   </Link>
        </div>
        <div className=' hover:border-b-2 py-1 hover:border-primary'>
            <Link href={`/${locale}/p-admin/news`} className='font-medium text-xl'>  News  </Link>
        </div>
    </div>
  )
}

export default Sidebar