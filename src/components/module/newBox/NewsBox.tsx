import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdUpdate } from "react-icons/md";

type newsType = {
  _id: string;
  shortTitle: string;
  description: string;
  title: string;
  image: string;
};

type NewsBoxProps = {
  news: newsType;
};

const NewsBox = ({ news }: NewsBoxProps) => {
    const locale = useLocale()
  return (
    <Link href={`/${locale}/news/${news._id}`}>
    <div className="grid grid-cols-1 my-5 hover:scale-105 transition-all duration-100 rounded-md sm:grid-cols-3 bg-gradient-to-r from-indigo-200  grid-rows-[15vw] items-center justify-between">
      {/* image */}
      <div className="h-full w-full p-3 rounded-lg">
        <Image
          src={news.image}
          width={1000}
          height={500}
          alt="image News"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* description news */}
      <div className="col-span-2 h-full">
        <div className="flex flex-col items-start justify-between  h-full py-8 px-3">
          <div className=" flex items-start child:mx-1">
            <span className="font-bold">{news.title}</span>
          </div>
          <div
            className="text-black/75 text-sm"
            dangerouslySetInnerHTML={{
              __html:
                news.description.slice(0, 250) +
                (news.description.length > 250 ? "..." : ""),
            }}
          ></div>

          <div className="text-sm flex items-center child:mx-1">
            <span>
              <MdUpdate className="font-bold text-xl" />
            </span>
            <span> 1427/5/may </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default NewsBox;
