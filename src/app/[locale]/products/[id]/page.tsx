import connectToDB from "@/configs/db";
import Image from "next/image";
import React from "react";
import Productmodel from "../../../../../models/Product";

type paramsType = {
  locale: string;
  id: string;
};

type ProductDetailProps = {
  params: paramsType;
};

const ProductDetail = async ({ params }: ProductDetailProps) => {
  connectToDB();
  const productId = params.id;
  const product = await Productmodel.findOne({ _id: productId });

  return (
    <div className="mt-32">
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* img content */}
          <div className="md:px-10">
            <div>
              <Image
                src={product.image}
                width={1000}
                height={500}
                alt="image product"
                className="w-full h-full  xs:h-[50vw] lg:h-[30vw] object-contain"
              />
            </div>
            <div className="flex items-center justify-start md:justify-center ">
              <button className="bg-primary py-2 px-8 text-white rounded-sm hover:scale-110 transition-all duration-200 text-sm">
                Contact us
              </button>
            </div>
          </div>

          {/* dexcription  content  */}
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className=" p-2 leading-6 xs:p-5 sm:leading-8 "
            ></div>

            {product.features && (
              <div className="mt-10">
                {product.features.map((featureItem:any) => (
                  <table className="flex  items-center justify-between  bg-primary2 child:px-3 child:py-2 border-b border-b-primary sm:px-5">
                    <thead>
                      <tr>
                        <td className="font-medium text-xs sm:text-sm sm:py-1">
                          {featureItem.title}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-medium text-xs sm:text-sm sm:py-1">
                          {featureItem.feature}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-start  mt-10"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
