"use client"
import { menuCategoryTypes } from '@/types/menuTypes'
import React from 'react'

type MenuProps = {
    menu:menuCategoryTypes
}

const Menu = ({menu}:MenuProps) => {
  return (
    <div className=' flex items-center justify-center px-4 '>
        <table className=''>
            <thead className='mb-2 '>
                <tr className='font-medium text-sm py-3 '>
                    <th className='text-black hover:cursor-text'>{menu.headline}</th>
                </tr>
            </thead>
            <tbody className=' px-2'>

            {menu.products?.map(product=>(
                <tr key={product._id} className='px-2'>
                    <td className='text-sm py-1 ps-2 text-black hover:text-primary' >
                        {product.name}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Menu