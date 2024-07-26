"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Cients = () => {
  const t = useTranslations('compant-clients')
  const slider_clientsdata = [
    {
      id: "1",
      imageName: "1.png",
    },
    {
      id: "2",
      imageName: "2.png",
    },
    {
      id: "3",
      imageName: "3.png",
    },
    {
      id: "4",
      imageName: "4.png",
    },
    {
      id: "5",
      imageName: "5.png",
    },
    {
      id: "6",
      imageName: "6.png",
    },
    {
      id: "7",
      imageName: "7.png",
    },
    {
      id: "8",
      imageName: "8.png",
    },
    {
      id: "9",
      imageName: "9.png",
    },
    {
      id: "10",
      imageName: "10.png",
    },
    {
      id: "11",
      imageName: "11.png",
    },
    {
      id: "12",
      imageName: "12.png",
    },
    {
      id: "13",
      imageName: "13.png",
    },
    {
      id: "14",
      imageName: "14.png",
    },
    {
      id: "15",
      imageName: "15.png",
    },
    {
      id: "16",
      imageName: "16.png",
    },
    {
      id: "17",
      imageName: "17.png",
    },
    {
      id: "18",
      imageName: "18.png",
    },
    {
      id: "19",
      imageName: "19.png",
    },
    {
      id: "20",
      imageName: "20.png",
    },
  ];

  return (
    <div className="bg-primary2 py-4 my-5">
    <p className="text-center text-3xl font-medium mt-10 ">{t('title')}</p>
    <div className="flex  items-center justify-center  py-10  ">
      <Swiper
        loop={true}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            450: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {slider_clientsdata.map((client) => (
          <SwiperSlide key={client.id} className=" flex items-center justify-center">
            <Image
              src={`/clients/${client.imageName}`}
              width={1000}
              height={500}
              alt="client-img"
              className="w-auto h-20 object-cover  mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Cients;
