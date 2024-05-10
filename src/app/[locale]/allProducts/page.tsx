import Image from 'next/image';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '../../styles/allproducts/allproducts.module.css'

const AllProducts = () => {
  const products = Array.from(Array(8).keys());
  return (

    <div>
      <div className='lg:ps-10'>
        Breadcrump
      </div>
      <div className='lg:ps-10'>
        <p className='text-5xl font-medium'>Products</p>
      </div>

      {/*.... all products body.... */}
        <div className='mt-24 lg:px-20 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-24'>


              {products.map((product , index)=>(
                <div key={index} className={styles.productBox}>
                  <div className={styles.productImgContent} >
                    <div className='  w-3/4  -translate-y-10'>
                      <Image src='/assets/ (2).png' width={1000} height={500} alt='product image' className='w-full h-full' />
                    </div>
                  </div>
                  <div className=''>
                    <p className='flex items-center justify-between p-2 font-medium text-sm'> <span className={styles.name}> name product </span> <FaArrowRightLong className='text-primary' /> </p>
                    <hr />
                    <p className='text-sm text-black/75 py-3'>KEYENCE Sensors are used to detect, measure, and inspect a target during a process to increase efficiency.</p>
                  </div>
                </div>
              ))}


            </div>
        </div>
    </div>
  )
}

export default AllProducts