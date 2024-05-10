import AllProducts from '@/components/template/index/AllProducts';
import DescribServices from '@/components/template/index/DescribServices';
import ProductSlider from '@/components/template/index/ProductSlider';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('navbar');
  return (
    <div className='mt-32'>
      <DescribServices />
      <ProductSlider />
      <AllProducts />
      ddddddd
      dddd
    </div>
  )
}
