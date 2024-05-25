"use client";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useLocale } from "next-intl";
import { product } from "@/types/productTypes";

const AllCategory = () => {
  const [allCategory, setAllCategory] = useState<product[] | null>(null);
  const locale = useLocale();

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    console.log("getAllCategory");

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

  return (
    <div>
      {allCategory && (
        <div className="my-3 mx-2 bg-[#3232] rounded py-2">
          <div className="my-3 mx-2 bg-[#3232] rounded py-2">
            {allCategory.map((category) => (
              <CategoryItem
                key={category._id}
                category={category}
                getAllCategory={getAllCategory}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategory;
