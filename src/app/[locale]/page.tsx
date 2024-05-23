
import AllProducts from '@/components/template/index/AllProducts';
import Clients from '@/components/template/index/Clients';
import DescribServices from '@/components/template/index/DescribServices';
import News from '@/components/template/index/News';
import ProductSlider from '@/components/template/index/ProductSlider';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('navbar');
  return (
    <div className='mt-32'>
      <DescribServices />
      <ProductSlider />
      <AllProducts />
      <News />
      <Clients />
    </div>
  )
}
