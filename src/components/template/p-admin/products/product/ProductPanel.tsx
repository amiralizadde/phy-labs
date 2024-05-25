import TitleBox from '@/components/module/titleBox/TitleBox'
import React from 'react'
import AddProductForm from './AddProductForm'
import AllProducts from './AllProducts'

const ProductPanel = () => {
  return (
    <div >
        <div>
            <TitleBox title='Products'/>
        </div>

        {/* body */}
        <div className='p-3 rounded bg-[#c8cbcb]'>
            <div className='text-start   mt-5 rounded-t-full  '>
                <p className='bg-primary inline px-4 py-1 text-white rounded-t'> Add Product </p>
            </div>

            {/* form add product */}
            <div className='bg-[#3232] p-3'>
                <AddProductForm />
            </div>

            {/* all product */}
           <div>
            <div className='text-start   mt-10 rounded-t-full  '>
                <p className='bg-primary inline px-4 py-1 text-white rounded-t'> All Products </p>
            </div>

            <div>
                <AllProducts />
            </div>

          </div>
        </div>


        
    </div>
  )
}

export default ProductPanel