"use-client"
import React, { useState } from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import {  FreeMode, Navigation, Thumbs} from "swiper/modules";
import Image from 'next/image';
import { IoMdCloseCircle } from 'react-icons/io';



const ViewPics = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isShowGallery , setIsShowGallery] = useState<boolean>(false)

    const handleSwiper = (swiper:any) => {
        setThumbsSwiper(swiper);
      };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
    <Swiper
      navigation={false}
      loop={true}
      // thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="  flex items-center justify-center w-full "
  >
      <SwiperSlide className="w-full h-full">
          <Image
              src="/assets/pics_products/p_6.png"
              width={1000}
              height={500}
              priority={true}
              alt="product slider"
              className=" w-full lg:w-[45vw] xl:w-[30vw]  h-[300px] md:h-[350px] object-contain mx-auto"
          />
         
      </SwiperSlide> 
      <SwiperSlide className="w-full h-full">
          <Image
              src="/assets/pics_products/Picture311.png"
              width={1000}
              height={500}
              alt="product slider"
              className=" w-full lg:w-[45vw] xl:w-[30vw] h-[300px] md:h-[350px] object-contain mx-auto"
          />
      </SwiperSlide>
    </Swiper>
   <Swiper
          // onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=" w-full h-[100px]  child:p-2"
      >
          <SwiperSlide className="w-full h-full child:border child:border-black p-2" onClick={()=>setIsShowGallery(true)}>
              <Image
                  src="/assets/pics_products/p_6.png"
                  width={1000}
                  height={500}
                  priority={true}
                  alt="product slider"
                  className=" w-[56vw] lg:w-[45vw] xl:w-[30vw] h-[75px] object-cover"
              />
          </SwiperSlide> 
          <SwiperSlide className="w-full h-full child:border child:border-black p-2" onClick={()=>setIsShowGallery(true)}>
              <Image
                  src="/assets/pics_products/Picture311.png"
                  width={1000}
                  height={500}
                  alt="product slider"
                  className=" w-[56vw]  lg:w-[45vw] xl:w-[30vw] h-[75px] object-cover"
              />
          </SwiperSlide>
    </Swiper>


     {/* modal gallery */}
    
     <div className={`z-30 bg-black ${isShowGallery ? 'fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 ' : 'hidden'}` } >
                    <div className="z-40 w-screen  mx-auto" onClick={(e) => {
                        e.stopPropagation();
                        setIsShowGallery(true);
                    }}>
                    <Swiper
                        navigation={false}
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className=" bg-primary2  flex items-center justify-center w-1/2 rounded-lg "
                    >
                        <SwiperSlide className="w-full h-full">
                            <Image
                                src="/assets/pics_products/p_6.png"
                                width={1000}
                                height={500}
                                priority={true}
                                alt="product slider"
                                className=" w-full lg:w-[45vw] xl:w-[30vw]  h-[300px] md:h-[350px] object-contain mx-auto"
                            />
                        
                        </SwiperSlide> 
                        <SwiperSlide className="w-full h-full">
                            <Image
                                src="/assets/pics_products/Picture311.png"
                                width={1000}
                                height={500}
                                alt="product slider"
                                className=" w-full lg:w-[45vw] xl:w-[30vw] h-[300px] md:h-[350px] object-contain mx-auto"
                            />
                        </SwiperSlide>
                    </Swiper>
                     <Swiper
                        onSwiper={handleSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={10}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="w-4/5 border h-[100px]  child:p-2 rtl mt-3 "
                     >
                        <SwiperSlide className="w-full h-full bg-primary2  rounded p-2 ">
                            <Image
                                src="/assets/pics_products/p_6.png"
                                width={1000}
                                height={500}
                                priority={true}
                                alt="product slider"
                                className=" w-[56vw] lg:w-[45vw] xl:w-[30vw] h-[75px] object-cover "
                            />
                        
                        </SwiperSlide> 
                        <SwiperSlide className="w-full h-full rounded p-2 bg-primary2">
                            <Image
                                src="/assets/pics_products/Picture311.png"
                                width={1000}
                                height={500}
                                alt="product slider"
                                className=" w-[56vw]  lg:w-[45vw] xl:w-[30vw] h-[75px] object-cover"
                            />
                        
                        </SwiperSlide>
                    </Swiper>
                    </div>

                    <div className=" fixed top-3 text-4xl left-10 cursor-pointer"   onClick={(e) =>setIsShowGallery(false)}>
                       <IoMdCloseCircle className="text-primary2 " />
                    </div>
                
           </div>
</div> 
  )
}

export default ViewPics