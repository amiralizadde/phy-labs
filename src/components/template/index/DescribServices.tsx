import React from 'react'
import { useTranslations } from 'next-intl'

const DescribeServices = () => {
    const t = useTranslations('description-Services')
  return (
    <div className='px-3 sm:px-10 py-5'>
        <div className='bg-primary2 py-3 rounded-md child:ps-3 sm:child:ps-16 child:my-2'>
            <p className='text-sm font-bold'>{t('title')}</p>
            <p className='text-sm'>{t('description')}</p>
        </div>
    </div>
  )
}

export default DescribeServices