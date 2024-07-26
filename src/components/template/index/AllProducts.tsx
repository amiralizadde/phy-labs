import TitleBox from "@/components/module/titleBox/TitleBox";
import Image from "next/image";
import React from "react";
import Productmodel from "../../../../models/Product";
import { useLocale, useTranslations } from "next-intl";
import connectToDB from "@/configs/db";
import { productType } from "@/types/productTypes";
import { BsFillBagFill } from "react-icons/bs";

const AllProducts = async () => {
  const sortProducts: productType[] = [];
  const t = useTranslations("allProducts");
  const locale = useLocale();
  connectToDB();
  const allProductsCategores = await Productmodel.find({ locale });
  allProductsCategores.map((category) => {
    category.products.slice(0, 2).map((product: productType) => {
      sortProducts.push(product);
    });
  });

  return (
    <div className=" my-10">
      <div className="flex items-center justify-between mx-5 sm:mx-10">
        <TitleBox title={t("title")} />
        <button className="font-medium bg-primary text-white py-1 px-5 xs:py-2 xs:px-10 text-sm hover:scale-105 transition-all duration-200 cursor-pointer">
          <span className="">{t("btn")}</span>
        </button>
      </div>
      <div className="my-10">
        {sortProducts.length > 0 ? (
          <div className="px-5 lg:px-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {sortProducts.slice(0,8).map((product) => (
              <div className="border h-80 flex flex-col items-center justify-between shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer py-4">
                <div className="flex items-center justify-center">
                  <Image
                    src={product.image}
                    width={1000}
                    height={500}
                    alt="product image"
                    className="w-[250px] h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center flex-col w-full  md:w-1/2 child:text-black/50">
              <p className="text-2xl lg:text-4xl">{t("emptyTitle")}</p>
              <BsFillBagFill className="text-9xl my-5" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
