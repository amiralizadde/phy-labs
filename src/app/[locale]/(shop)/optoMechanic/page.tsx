import Breadcrumb from '@/components/module/breadcrump/Breadcrumb';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import styles from '@/styles/shop/optoMechanic.module.css'
import Link from 'next/link';

const OptoMechanic = () => {
    const locale = useLocale()
    const array =new Array(12).fill('')
   
    
  return (
    <div>
        
        <div className=' md:mx-5 px-5'>

                {/* Breadcrumb */}
                <div className=' mt-16 mb-10 ms-10'>
                    <Breadcrumb 
                        homeElement={locale === "en" ? "Home":"خانه"}
                        separator="/"
                        containerClasses="breadcrumbs"
                        listClasses="breadcrumb-item"
                        activeClasses="active"
                        capitalizeLinks={true}
                    />
                </div>

                {/* title Opto mechanic */}
                <div>
                    <p className='text-2xl md:text-4xl font-semibold mb-10 ms-10'>Opto mechanic</p>
                </div>

                {/* container products */}
                <div className='my-16'>

                        {/* product box */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 '>
                            {
                                array.map((item , index)=>(
                                    <Link href={`/${locale}/optoMechanic/${index}`}>
                                        <div className='w-[270px] sm:w-[330px] lg:w-[280px] mx-auto shadow-md '>
                                            <div className='w-[230px] mx-auto sm:w-[300px] lg:w-[250px]  '>
                                            <Image src='/assets/pics_products/p_6.png' width={1000} height={500} alt='name product' className={styles.product_img} />
                                            </div>
                                            <div className=' ms-2 py-1 mt-5'>
                                                <p className='font-semibold'> Optical table  </p>
                                                <p className='text-sm flex items-center font-medium text-black/75 mt-2'><span>Guarantee</span><FaCheck className='text-white ms-2 bg-green-500 rounded-full text-xs ' /></p>
                                                <p className='text-sm flex items-center font-medium text-black/75'><span>Free delivery</span><FaCheck className='text-white ms-2 bg-green-500 rounded-full text-xs '/></p>
                                                <p className='text-sm flex items-center font-medium text-black/75'><span>Quality guarantee</span><FaCheck className='text-white ms-2 bg-green-500 rounded-full text-xs '/></p>
                                                {locale === "en" ? '' :<p>250,000,000</p>}
                                                <div className='mt-5 me-2'>
                                                <button className='bg-primary py-2 rounded text-white text-sm w-full'>Show details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>

                </div>

        </div>

    </div>
  )
}

export default OptoMechanic;