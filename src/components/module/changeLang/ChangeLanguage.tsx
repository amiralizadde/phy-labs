'use client'
import React from 'react'
import  { useLocale  }  from 'next-intl'
import {useRouter} from 'next/navigation';


const ChangeLanguage = () => {

    const locale = useLocale();
    const router = useRouter()

    // const changeLang=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    //     const nextLocale = e.target.value;
    //     router.replace(`/${nextLocale}`)
    // }

  return (
    <div className='flex items-center child:mx-2 child:font-medium child:cursor-pointer'>
        {/* <select onChange={changeLang} defaultValue={locale} className='outline-none'>
            <option value="en" > English </option>
            <option value="fa"> فارسی </option>
        </select> */}
        <button onClick={(e)=>router.replace(`/en`)}>EN</button>
        <button onClick={(e)=>router.replace(`/fa`)}>FA</button>
    </div>
  )
}

export default ChangeLanguage