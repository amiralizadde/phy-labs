"use client";
import React, { useState } from "react";
import { menuTypes } from "@/types/menuTypes";
import { MdArrowForwardIos } from "react-icons/md";
import NavbarSubroutes from "./NavbarSubroutes";
import { product } from "@/types/productTypes";
import { IoIosArrowBack } from "react-icons/io";
import { useLocale } from "next-intl";

type NavbarItemsProps = {
  menuTitle: string;
  category: product[] | null;
};

const NavbarItems = ({ menuTitle, category }: NavbarItemsProps) => {
  const [isShowSubroutes, setIsShowSubroutes] = useState<boolean>(false);
  const locale = useLocale();
  return (
    <>
      <li className="py-4 border-b border-b-black/25 mx-2">
        <p
          className="flex items-center  font-medium"
          onClick={() => setIsShowSubroutes(!isShowSubroutes)}
        >
          <span>{menuTitle}</span>
          {category &&
            (locale === "en" ? (
              <MdArrowForwardIos
                className={`${
                  isShowSubroutes && "rotate-90"
                } text-sm transition-all duration-200 text-primary  mx-2`}
              />
            ) : (
              <IoIosArrowBack className={`${
                isShowSubroutes && "-rotate-90"
              } text-sm transition-all duration-200 text-primary  mx-2`}/>
            ))}
        </p>
        {isShowSubroutes && category && (
          <ul className="bg-gray-300/50 py-2 my-2 me-5 rounded-md child:py-1">
            {category?.map((categoryItem) => (
              <NavbarSubroutes
                key={categoryItem._id}
                productsItem={categoryItem}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default NavbarItems;
