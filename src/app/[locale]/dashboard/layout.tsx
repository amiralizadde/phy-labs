import Sidebar from '@/components/template/dashboard/Sidebar'
import { verifyToken } from '@/utils/utils';
import { useLocale } from 'next-intl';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'
import Usermodel from '../../../../models/User';
import { JwtPayload } from 'jsonwebtoken';
import connectToDB from '@/configs/db';
import { userType } from '@/types/authTypes';

const DashboardLayout =async ({children}:{children: React.ReactNode}) => {

  const locale = useLocale()
   const token: string | undefined  = cookies().get('token')?.value;

    if (!token) {
      redirect(`/${locale}/signin`)
    }
    
     const tokenPayload = verifyToken(token) as JwtPayload

     if (!tokenPayload) {
       redirect(`/${locale}/signin`)
    }
     
      connectToDB()
      const user = await Usermodel.findOne({email:tokenPayload.email})
    


   

  return (
    <div className='mt-32  px-10' dir='rtl'>
      <div >
        <p className="text-3xl font-bold text-gray-800"> پنل کاربری </p>
      </div>
      <main>
        <div className="grid grid-cols-4 ">
          <div className='col-span-1 border border-black'>
           <Sidebar user={user} />
          </div>
          <div className="border border-black col-span-3"> 
             {children} 
          </div>
        </div>
      </main>
        
    </div>
  )
}

export default DashboardLayout