"use client"
import React, { useState } from "react";
import { menuCategoryTypes } from "@/types/menuTypes";
import { MdArrowForwardIos } from "react-icons/md";

type NavbarSubroutesProps = {
  productsItem: menuCategoryTypes;
};

const NavbarSubroutes = ({ productsItem }: NavbarSubroutesProps) => {
  const [isShowProducts, setIsShowProducts] = useState<boolean>(false);
  return (
    <li >
      <p className="grid grid-cols-3  items-center" onClick={() => setIsShowProducts(!isShowProducts)}>
        <span className=" col-span-2">{productsItem.headline}</span>
        {productsItem.products && (
          <MdArrowForwardIos className={`${isShowProducts && 'rotate-90'} text-sm transition-all duration-200  text-primary `} />
        )}
      </p>
      {isShowProducts && productsItem.products && (
        <ul className="bg-gray-400/25 py-2 my-2 child:p-1 child:list-disc child:ms-7 child:px-5 me-5 rounded-md">
          {productsItem.products?.map((categoryItem) => (
            <li>{categoryItem.name}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarSubroutes;
