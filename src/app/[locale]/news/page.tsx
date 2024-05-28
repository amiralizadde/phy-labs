
import connectToDB from "@/configs/db";
import NewsModel from "../../../../models/News";
import NewsBox from "@/components/module/newBox/NewsBox";
import { useLocale } from "next-intl";

const News = async () => {
  const locale = useLocale()
  connectToDB();
  const allNews = await NewsModel.find({locale});

  return (
    <div className="mt-32  ">
      <div className="grid grid-cols-5">
        {/* news content */}
        <div className="col-start-2 col-span-3  rounded-2xl">
          <div className="bg-primary text-xl rounded-t-full text-center py-2 text-white my-2">
            News
          </div>
          {allNews.length &&
            allNews.map((news) => (
             <NewsBox key={news._id} news={news} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
