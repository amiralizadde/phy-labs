"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/navbar/navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { menuTypes } from "@/types/menuTypes";
import NavbarItems from "./NavbarItems";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { useLocale } from "next-intl";
import Menu from "./Menu";
import Link from "next/link";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { product } from "@/types/productTypes";

const Navbar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
  const [isShowSearchBox, setIsShowSearchBoxr] = useState<boolean>(false);
  const [menuData, setMenuData] = useState<menuTypes[]>();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("navbar");
  const tSearch = useTranslations("search");

  const sidebarAnimation = () => {
    sidebarRef.current &&
      sidebarRef.current.style.animationDirection === "reverse";
  };

  const AboutDataEn = [
    { _id: "1", locale: "en", headline: "Company Members", products: [] },
    { _id: "2", locale: "en", headline: "Company History", products: [] },
  ];
  const AboutDataFa = [
    { _id: "1", locale: "fa", headline: " اعضای هیات مدیره ", products: [] },
    { _id: "2", locale: "fa", headline: " تاریخچه شرکت ", products: [] },
  ];

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

  return (
    <div className={styles.navbar}>
      <div className=" w-full h-full flex flex-col items-center justify-center p-2 ">
        <div className={styles.navbar__content}>
          {/* search */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsShowSearchBoxr(!isShowSearchBox)}
          >
            {isShowSearchBox ? (
              <IoIosClose className="text-2xl cursor-pointer" />
            ) : (
              <IoIosSearch className="text-2xl cursor-pointer" />
            )}
          </div>
          <div className="">
            <Link href={`/${locale}/`}>
              <Image
                src="/assets/logo/PhyLabs.png"
                width={1000}
                height={500}
                alt="phy_labs logo"
                className="w-[60px] h-auto"
              />
            </Link>
          </div>
          <div className={styles.navabrItems__content}>
            <div className={styles.menu__content}>
              <ul>
                <li className={styles.menuItem}>
                  <Link href={`/${locale}/`}>
                    <span>{t("home")}</span>
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link
                    href={`/${locale}/products`}
                    className="flex items-center justify-between"
                  >
                    <span>{t("products")}</span>
                    <MdArrowForwardIos className={styles.arrowSubroutes} />
                  </Link>
                  {allCategory?.length ? (
                    <div className={styles.submenu}>
                      {allCategory?.map((categoryItem) => (
                        <Menu key={categoryItem._id} menu={categoryItem} />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li className={styles.menuItem}>
                  <Link href={`/${locale}/services`}>
                    <span>{t("services")}</span>
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href={`/${locale}/news`}>
                    <span>{t("news")}</span>
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href={`/${locale}/about/companyMembers`}>
                    <span>{t("about")}</span>
                  </Link>
                  <div className={styles.submenu}>
                    <ul className="flex items-center justify-center child:text-black child:mx-3">
                      <li>
                        <Link href={`/${locale}/about/companyMembers`}>
                          {locale === "en" ? "Company Members" : " اعضای هیات مدیره  "}
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${locale}/about/companyHistory`}>
                        {locale === "en" ? "Company History" : " تاریخچه شرکت  "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.menuItem}>
                  <Link href={`/${locale}/contact`}>
                    <span>{t("contact")}</span>
                  </Link>
                </li>

                {/* { menuData?.map((menuItem) => (
                  <div key={menuItem.id}>
                    <li  className={styles.menuItem}>
                      <Link href={`/${locale}/${menuItem.route}`} className="flex items-center justify-between"><span>{menuItem.menuTitle}</span>
                        {menuItem.category && (
                          <MdArrowForwardIos className={styles.arrowSubroutes} />
                        )}
                      </Link>
                    </li>
                    {menuItem.category && (
                      <div className={styles.submenu}>
                        {menuItem.category?.map((categoryItem) => (
                          <Menu key={categoryItem.id} menu={categoryItem} />
                        ))}
                      </div>
                    )}
                  </div>
                ))} */}
              </ul>
            </div>

            <div className="flex items-center justify-end">
              
              <span className="mx-3 ">
                <Link href={`/${locale}/signin`}>
                  <FaUser className="cursor-pointer" />
                </Link>
              </span>
              <div
                className="cursor-pointer "
                onClick={() => setIsShowSearchBoxr(!isShowSearchBox)}
              >
                {isShowSearchBox ? (
                  <IoIosClose className="text-2xl" />
                ) : (
                  <IoIosSearch className="text-2xl" />
                )}
              </div>
            </div>
          </div>

          {/* collaps menu */}
          <div className="lg:hidden">
            {/* menuicon */}
            <div
              className="bg-primary p-1 rounded-sm cursor-pointer"
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            >
              <FiMenu className="text-white" />
            </div>
          </div>
        </div>
        {/* {isShowSearchBox && ( */}
        <div
          className={`${
            isShowSearchBox ? "w-full h-12 py-2 lg:w-3/4" : "w-0 h-0 p-0"
          }   bg-primary2 border-black rounded-full mt-2 overflow-hidden flex items-end justify-between   relative transition-all duration-500`}
        >
          <input
            type="text"
            placeholder={tSearch("placeholder")}
            className="w-full py-1 bg-transparent  px-4 outline-none  placeholder:text-sm text-sm"
          />
          <IoIosSearch
            className={`text-2xl cursor-pointer  -translate-y-1 ${
              locale === "en" ? "-translate-x-2" : "translate-x-2"
            }`}
          />
        </div>
        {/* )} */}

        {/* collaps content */}

        <aside
          className={`${styles.collapsMenu__content} ${
            isShowSidebar
              ? locale === "en"
                ? "left-0"
                : "right-0"
              : locale === "en"
              ? "-left-[150vw]"
              : "-right-[150vw]"
          }`}
        >
          <ul className="">
            <NavbarItems menuTitle={t("home")} category={null} />
            <NavbarItems menuTitle={t("products")} category={allCategory} />
            <NavbarItems menuTitle={t("services")} category={null} />
            <NavbarItems menuTitle={t("news")} category={null} />
            <NavbarItems menuTitle={t("contact")} category={null} />
            <NavbarItems
              menuTitle={t("about")}
              category={locale === "en" ? AboutDataEn : AboutDataFa}
            />
          </ul>
          <div>SignIn/SignUp</div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
