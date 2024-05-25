import Sidebar from '@/components/template/p-admin/Sidebar'
import { verifyToken } from '@/utils/utils';
import { useLocale } from 'next-intl';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'
import Usermodel from '../../../../models/User';
import { JwtPayload } from 'jsonwebtoken';
import connectToDB from '@/configs/db';
import { userType } from '@/types/authTypes';

const PanelAdminLayout = async ({children}:{children: React.ReactNode}) => {

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
    <div className='mt-32  px-10'>
      <div >
        <p className="text-3xl  font-medium text-gray-800"> Panel Admin </p>
      </div>
      <main>
        <div className="grid grid-cols-7 bg-primary2">
          <div className='col-span-1 bg-gradient-to-r from-[#9b9b9bfc]'>
            <Sidebar user={user} />
          </div>
          <div className="rounded-md col-span-6 "> 
             {children} 
          </div>
        </div>
      </main>
        
    </div>
  )
}

export default PanelAdminLayout