"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import 'swiper/css/pagination';
import { Navigation , Autoplay ,Pagination} from "swiper/modules";
import Image from 'next/image';

const Tbm_HeaderSlider = () => {
  return (
    <div>
          <div className="flex items-center justify-center  ">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { // برای سایزهای کوچکتر از 991px
              navigation: {
                enabled:false
              },
            },
            991: { // برای سایزهای بزرگتر از 991px
              navigation: {
                enabled:true
              },
            },
          }}
        className="mySwiper h-auto md:h-[50vw] xl:h-[30vw] md:bg-gray-100 flex items-center justify-center "
      >
         <SwiperSlide className="">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="translate-y-5 w-full md:w-1/2 lg:translate-y-0 flex flex-col items-center justify-center bg-gray-100 p-5" >
              <Image
                src="/assets/pics_products/p_6.png"
                width={1000}
                height={500}
                priority={true}
                alt="product slider"
                className=" w-[56vw] lg:w-[45vw] xl:w-[30vw] object-cover"
              />
            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-center  ">
            <div className="translate-y-5 lg:translate-y-0 flex flex-col items-center justify-center  bg-gray-100 p-5 w-full md:w-1/2">
              <Image
                src="/assets/pics_products/Picture311.png"
                width={1000}
                height={500}
                alt="product slider"
                className=" w-[56vw] lg:py-5 lg:w-[45vw] xl:w-[30vw] object-cover"
              />
            </div>
         
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="translate-y-5 lg:translate-y-0 flex flex-col items-center justify-center  bg-gray-100 p-5 w-full md:w-1/2">
              <Image
                src="/assets/pics_products/Camera.png"
                width={1000}
                height={500}
                alt="product slider"
                className=" w-[56vw] lg:w-[45vw] xl:w-[30vw] object-cover"
              />
            </div>
        
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="translate-y-5 lg:translate-y-0 flex flex-col items-center justify-center  bg-gray-100 p-5 w-full md:w-1/2">
              <Image
                src="/assets/pics_products/1-Spectrometer_1.png"
                width={1000}
                height={500}
                alt="product slider"
                className=" w-[56vw] lg:w-[45vw] xl:w-[30vw] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Tbm_HeaderSlider