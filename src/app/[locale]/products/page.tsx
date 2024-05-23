import Image from 'next/image';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '../../../styles/allproducts/allproducts.module.css'
import connectToDB from '@/configs/db';
import Productmodel from '../../../../models/Product';
import ProductBox from '@/components/module/productBox/ProductBox';

const AllProducts = async() => {
  connectToDB()
  const allProduct = await Productmodel.find({})
  return (

    <div>
      <div className='lg:ps-10'>
        Breadcrump
      </div>
      <div className='lg:ps-10'>
        <p className='text-5xl font-medium'>Products</p>
      </div>

      {/*.... all products body.... */}
        <div className='mt-16 lg:px-20 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5  gap-y-14'>

              {allProduct.map((product)=>(
               <ProductBox key={product._id} product={product}/>
              ))}

            </div>
        </div>
    </div>
  )
}

export default AllProducts