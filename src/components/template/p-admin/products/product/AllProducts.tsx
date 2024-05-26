"use client";
import { product, productType } from "@/types/productTypes";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const locale = useLocale();
  const [allCategory, setAllCategory] = useState<product[] | null>(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    await fetch(`/${locale}/api/products/getAllProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locale),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data.body);
      });
  };

  const removeProduct = async(productID: string, headlineID: string) => {
    
    
    let data = {
      locale,
      productID,
      headlineID
    };
    await fetch(`/${locale}/api/products/deleteProduct`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>{
        console.log('res =>' , res);
    })

  };

  return (
    <div className="bg-[#3232] ">
      <table className=" bg-[#3232] p-5   w-full">
        <thead>
          <tr className=" child:py-1 ">
            <th className="text-start"> headline </th>
            <th className="text-start"> product </th>
            <th className="text-center"> action </th>
          </tr>
        </thead>
        <tbody className="p-2">
          {allCategory?.map((category, index) =>
            category.products?.map((product) => (
              <tr className=" text-sm font-medium my-3 child:py-2 child:px-2 ">
                <td className="font-medium">{category.headline}</td>
                <td className="font-medium">{product.name}</td>
                <td className=" flex items-center justify-center">
                  <button
                    onClick={() => removeProduct(product._id,category._id)}
                    className="bg-primary py-1 px-2 text-white text-xs"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
