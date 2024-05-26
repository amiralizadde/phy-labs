import TitleBox from "@/components/module/titleBox/TitleBox";
import Image from "next/image";
import React from "react";
import styles from '../../../styles/index/index.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import connectToDB from "@/configs/db";
import NewsModel from "../../../../models/News";
import { useTranslations } from "next-intl";

const News = async() => {
   const t = useTranslations('allNews')
  connectToDB()
  const allNews = await NewsModel.find({})
  return (
    <div className="px-10 my-10">
      <div className="flex items-center justify-between">
      <TitleBox title={t('title')} />
      <button className=" font-medium bg-primary text-white py-2 px-10 hover:scale-105 transition-all duration-200 cursor-pointer"> 
      <span>{t('btn')}</span>
       </button>
      </div>
      <div className="my-10">
        <div className="px-5 lg:px-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allNews.map((news) => (
            <div className={styles.newsbox}>
              <p className="text-sm"> May 18, 2024 </p>
              <p className="text-sm font-bold mt-2">{news.shortTitle}</p>
              {/* <pre className="text-sm my-2">{news.description.slice(0,100)} . . .</pre> */}
              <span className={styles.arrowbox}> <FaArrowRightLong /> </span>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default News;
