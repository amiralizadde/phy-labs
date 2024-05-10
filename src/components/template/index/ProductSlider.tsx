"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation , Autoplay ,Pagination} from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ProductSlider = () => {
  const t = useTranslations("product-slider");

  const slider_productsdata = [
    {
      id: "1",
      imageName: "p_6.png",
      name: "Optical 3D Profilometer",
      features: [
        " Measuring and displaying the three-dimensional profile of the surface ",
        "Depth accuracy better than 5 nm",
        "Ability to measure flat and spherical, liquid and solid surfaces.",
        "Non-destructive and no need for sample preparation",
      ],
    },
    {
      id: "2",
      imageName: "Picture311.png",
      name: "Types of Positioners",
      features: [
        "Manual Linear Translation Stages",
        "Manual Linear Nano-Positioner",
        "Piezo Nano positioner",
        "Miniature Linear Translation Stages",
      ],
    },
    {
      id: "3",
      imageName: "Camera.png",
      name: "Furnace monitoring camera",
      features: [
        "The ability to change the angle and field of view according to the order ",
        "Optical design based on high temperature resistancer",
        "  Air-cooled cooling system only (no need for cooling water)",
        "No need for a self-retracting system ",
        " Camera control via Wi-Fi",
        "With replaceable protective glass",
        "Self-cleaning camera window",
      ],
    },
    {
      id: "4",
      imageName: "1-Spectrometer_1.png",
      name: "Types of spectrometers",
      features: [
        "spectrometer Vis-NIR",
        "Optical spectrometer  UV-Vis-NIR",
        "Optical spectrometer Vis-NIR ",
      ],
    },
  ];




  return (
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
            <div className="w-full  p-3 sm:p-5 bg-white md:bg-transparent    max-w-96 child:my-2 mt-5">
              <p className="font-bold text-2xl">{t('slider1.name')}</p>
              <ul className="child:list-disc child:ms-2 xs:child:ms-8 child:my-1 child:leading-7">
                <li>{t('slider1.feature1')}</li>
                <li>{t('slider1.feature2')}</li>
                <li>{t('slider1.feature3')}</li>
                <li>{t('slider1.feature4')}</li>
              </ul>
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
            <div className="w-full lg:w-auto p-3 sm:p-5 bg-white md:bg-transparent lg:bg-transparent    max-w-96 child:my-2 mt-5">
              <p className="font-bold text-2xl">
                {t('slider2.name')}
              </p>
              <ul className="child:list-disc child:ms-2 xs:child:ms-8 child:my-1 child:leading-7">
                <li>{t('slider2.feature1')}</li>
                <li>{t('slider2.feature2')}</li>
                <li>{t('slider2.feature3')}</li>
                <li>{t('slider2.feature4')}</li>
              </ul>
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
            <div className="w-full  p-3 sm:p-5 bg-white md:bg-transparent    max-w-96 child:my-2 mt-5">
              <p className="font-bold text-2xl">
                {t('slider3.name')}
              </p>
              <ul className="child:list-disc child:ms-2 xs:child:ms-8 child:my-1 child:leading-7">
                <li> {t('slider3.feature1')} </li>
                <li> {t('slider3.feature2')} </li>
                <li> {t('slider3.feature3')} </li>
                <li> {t('slider3.feature4')} </li>
                <li> {t('slider3.feature5')} </li>
                <li> {t('slider3.feature6')} </li>
                <li> {t('slider3.feature7')} </li>
              </ul>
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
            <div className="w-full  p-3 sm:p-5 bg-white md:bg-transparent    max-w-96 child:my-2 mt-5">
              <p className="font-bold text-2xl">
                {t('slider3.name')}
              </p>
              <ul className="child:list-disc child:ms-2 xs:child:ms-8 child:my-1 child:leading-7">
                <li> {t('slider3.feature1')} </li>
                <li> {t('slider3.feature2')} </li>
                <li> {t('slider3.feature3')} </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
