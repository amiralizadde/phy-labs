import TitleBox from "@/components/module/titleBox/TitleBox";
import Image from "next/image";
import React from "react";

const AllProducts = () => {
  const products = Array.from(Array(8).keys());
  return (
    <div className=" my-10">
      <div className="flex items-center justify-between mx-5 sm:mx-10">
      <TitleBox title="all products" />
      <button className="font-medium bg-primary text-white py-1 px-5 xs:py-2 xs:px-10 text-sm hover:scale-105 transition-all duration-200 cursor-pointer"> 
        <span className="">view all products</span>
       </button>
      </div>
      <div className="my-10">
        <div className="px-5 lg:px-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div className="border shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer py-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/(1).png"
                  width={1000}
                  height={500}
                  alt="product image"
                  className="w-[250px] h-full object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-medium">Product name</p>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default AllProducts;
