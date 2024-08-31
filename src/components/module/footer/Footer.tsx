import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer')
  return (
    <div className='bg-[#202020] px-10 lg:px-32 py-10 '>
        <div>
            <div className='grid md:grid-cols-4 lg:grid-cols-5  child:px-2 mb-16'>
                <div className='lg:col-span-2'>
                    <Image src="/assets/logo/PhyLabs-White.png" width={1000} height={500} alt='phy-labs logo' className='w-28 h-28 object-contain' />
                </div>
                <div className='child:font-medium   child:text-sm '>
                    <p className='font-bold  border-b border-white text-white mt-2 py-1'>{t('products')}</p>
                    <ul className='child:mt-3 child:text-white/75'>
                        <li>Metrology Systems</li>
                        <li>Nano-Position Sensors</li>
                        <li>Optical Components</li>
                        <li>Optical Assemblies</li>
                    </ul>
                </div>
                <div className='child:text-sm child:font-bold child:border-b child:mt-3 child:text-white child:py-1'>
                    <p>{t('company')}</p>
                    <p>{t('support')}</p>
                    <p>{t('contact')}</p>
                </div>
                <div className='child:text-white  py-3 '>
                    
                    <p className='text-sm font-bold'>{t('title1')}</p>
                    <p className='text-sm font-light my-5 leading-8'>
                        {t('address')}
                    </p>
                    <div  className='font-bold  mt-3 flex items-center child:text-white/50 child:text-xl hover:child:scale-125 child:transition-all child:duration-200 child:cursor-pointer'> 
                        <FaLinkedinIn className='hover:text-blue-700'/> 
                        <FaFacebook className='ms-3 hover:text-blue-700'/>
                        <FaTwitter className='ms-3 hover:text-black'/>
                        <FaYoutube className='ms-3 hover:text-primary'/>
                    </div>
                </div>
            </div>

            <div> 
                <ul className='child:text-white/50 child:text-xs flex flex-col xs:flex-row items-center child:mx-2'>
                    <li>{t('terms-of-Use')}</li>
                    <span>|</span>
                    <li>{t('privacy-Policy')}</li>
                    <span>|</span>
                    <li>{t('cookie-Policy')}</li>
                </ul>
             </div>
        </div>
    </div>
  )
}

export default Footer