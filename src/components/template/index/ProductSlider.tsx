"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "@/styles/index/index.module.css";

const ProductSlider = () => {
  const t = useTranslations("product-slider");
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
    <div className="flex flex-col items-end justify-center w-full ">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            // برای سایزهای کوچکتر از 991px
            navigation: {
              enabled: false,
            },
          },
          991: {
            // برای سایزهای بزرگتر از 991px
            navigation: {
              enabled: true,
            },
          },
        }}
        className={`mySwiper2 ${styles.big_swiper}`}
      >
        <SwiperSlide>
          <div className={styles.swiperSlide}>
            <div className={styles.swiperSlide__imgContent}>
              <Image
                src="/assets/pics_products/p_6.png"
                width={1000}
                height={500}
                priority={true}
                alt="product slider"
                className={styles.swiperSlide__img}
              />
            </div>
            <div className={styles.swiperSlide__txtContent}>
              <p className="font-bold sm:text-2xl lg:text-4xl lg:mb-4">{t("slider1.name")}</p>
              <ul className={styles.listContent}>
                <li>{t("slider1.feature1")}</li>
                <li>{t("slider1.feature2")}</li>
                <li>{t("slider1.feature3")}</li>
                <li>{t("slider1.feature4")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperSlide}>
            <div className={styles.swiperSlide__imgContent}>
              <Image
                src="/assets/pics_products/Picture311.png"
                width={1000}
                height={500}
                alt="product slider"
                className={styles.swiperSlide__img}
              />
            </div>
            <div className={styles.swiperSlide__txtContent}>
              <p className="font-bold sm:text-2xl lg:text-4xl lg:mb-4">{t("slider2.name")}</p>
              <ul className={styles.listContent}>
                <li>{t("slider2.feature1")}</li>
                <li>{t("slider2.feature2")}</li>
                <li>{t("slider2.feature3")}</li>
                <li>{t("slider2.feature4")}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperSlide}>
            <div className={styles.swiperSlide__imgContent}>
              <Image
                src="/assets/pics_products/Camera.png"
                width={1000}
                height={500}
                alt="product slider"
                className={styles.swiperSlide__img}
              />
            </div>
            <div className={styles.swiperSlide__txtContent}>
              <p className="font-bold sm:text-2xl lg:text-4xl lg:mb-4">{t("slider3.name")}</p>
              <ul className={styles.listContent}>
                <li> {t("slider3.feature1")} </li>
                <li> {t("slider3.feature2")} </li>
                <li> {t("slider3.feature3")} </li>
                <li> {t("slider3.feature4")} </li>
                <li> {t("slider3.feature5")} </li>
                <li> {t("slider3.feature6")} </li>
                <li> {t("slider3.feature7")} </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className={styles.swiperSlide}>
          <div className={styles.swiperSlide__imgContent}>
            <Image
              src="/assets/pics_products/1-Spectrometer_1.png"
              width={1000}
              height={500}
              alt="product slider"
              className={styles.swiperSlide__img}
            />
            </div>
            <div className={styles.swiperSlide__txtContent}>
              <p className="font-bold sm:text-2xl lg:text-4xl lg:mb-4">{t("slider3.name")}</p>
              <ul className={styles.listContent}>
                <li> {t("slider3.feature1")} </li>
                <li> {t("slider3.feature2")} </li>
                <li> {t("slider3.feature3")} </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-full mt-5 lg:me-16 max-w-xl">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={4}
          freeMode={true}
          spaceBetween={10}
          className={`mySwiper    ${styles.mini_Swiper}`}
        >
          <SwiperSlide>
            <Image
              src="/assets/pics_products/p_6.png"
              width={1000}
              height={500}
              priority={true}
              alt="product slider"
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/pics_products/Picture311.png"
              width={1000}
              height={500}
              alt="product slider"
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/pics_products/Camera.png"
              width={1000}
              height={500}
              alt="product slider"
              className=" w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/pics_products/1-Spectrometer_1.png"
              width={1000}
              height={500}
              alt="product slider"
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
