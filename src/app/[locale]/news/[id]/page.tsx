import TitleBox from "@/components/module/titleBox/TitleBox";
import connectToDB from "@/configs/db";
import React from "react";
import NewsModel from "../../../../../models/News";
import Image from "next/image";

type paramsType = {
  locale: string;
  id: string;
};

type newsDetailProps = {
  params: paramsType;
};

const NewsDetail = async ({ params }: newsDetailProps) => {
  connectToDB();
  const news = await NewsModel.findOne({ _id: params.id });
  // console.log('news ->' , news);

  return (
    <div className="mt-32">
      <div>
        {/* news content */}
        <div className="grid grid-cols-8">
          <div className="col-start-2 col-span-6 my-5">
            <TitleBox title={news.title} />
          </div>
          <div className="col-start-2 col-span-6">
            <div className="">
              <div className=" p-5 flex ">
                <Image
                  src={news.image}
                  width={1000}
                  height={500}
                  alt="image news"
                  className="h-[30vw] w-auto object-cover"
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: news.description }}
                className="px-8 py-5 "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
