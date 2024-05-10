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
import {useLocale} from "next-intl";
import Menu from "./Menu";
import Link from "next/link";

import { useTranslations } from "next-intl";
import ChangeLanguage from "../changeLang/ChangeLanguage";




const Navbar = () => {

  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
  const [isShowSearchBox, setIsShowSearchBoxr] = useState<boolean>(false);
  const [menuData , setMenuData] = useState<menuTypes[]>()
  const sidebarRef = useRef<HTMLDivElement>(null);
  const locale = useLocale()
  const t = useTranslations('navbar')
  const tSearch = useTranslations('search')

  const sidebarAnimation = () => {
    sidebarRef.current &&
      sidebarRef.current.style.animationDirection === "reverse";
  };



  const menusDataEn: menuTypes[] = [
    { id: "1", menuTitle: "Home" , route:"/" },
    {
      id: "2",
      menuTitle: "Products",
      route:'allProducts',
      category: [
        {
          id: "1",
          headline: "3D Measurement",
          products: [
            { id: "1", name: "Optical 3D Nano Profilometer" },
            { id: "2", name: "Optical 3D Micro Profilometer" },
          ],
        },
        {
          id: "2",
          headline: "Spectrometer",
          products: [
            { id: "1", name: "Spectrometer" },
            { id: "2", name: "Spectrophotometer" },
          ],
        },
        {
          id: "3",
          headline: "Opto Electronic",
          products: [
            { id: "1", name: "Spatial Light Modulator" },
            { id: "2", name: "RGB LED Light Source" },
            { id: "3", name: "Diode Laser Source" },
          ],
        },
        {
          id: "4",
          headline: "Opto Mechanic",
          products: [
            { id: "1", name: "  Motorized Translation Stage" },
            { id: "2", name: "Piezo Nano Positioner" },
            { id: "3", name: "Manual Linear Nano-Positioner" },
            { id: "4", name: "Miniature Manual Linear Translation Stages" },
            { id: "5", name: "Manual Linear Translation Stages" },
            { id: "6", name: "Spatial Filter" },
            { id: "7", name: "Kinematic Mount Plate" },
            { id: "8", name: "Kinematic Circular Mount" },
          ],
        },
        {
          id: "5",
          headline: "Optic Elements",
          products: [
            { id: "1", name: "Precision Pinhole" },
            { id: "2", name: "Lens Collection" },
            { id: "3", name: "Optical Flat Mirrors" },
          ],
        },
      ],
    },
    {
      id: "3",
      menuTitle: "Services",
      route:"services"
    },
    { id: "4", menuTitle: "News",route:"news" },
    { id: "5", menuTitle: "About",route:"about" },
    { id: "6", menuTitle: "Contact",route:"contact" },
  ];
  const menusDataFa: menuTypes[] = [
    { id: "1", menuTitle: " صفحه اصلی " , route:"/" },
    {
      id: "2",
      menuTitle: "محصولات",
      route:'allProducts',
      category: [
        {
          id: "1",
          headline: " طیف سنج ",
          products: [
            { id: "1", name: " طیف سنج  " },
            { id: "2", name: " طیف سنج  نوری " },
          ],
        },
        {
          id: "2",
          headline: " پروفایلومتر ",
          products: [
            { id: "1", name: "پروفایلومتر نوری سه‌بعدی با دقت میکرومتری (میکروپروفایلومتر)" },
            { id: "2", name: "پروفایلومتر نوری سه‌بعدی با دقت نانومتری (نانوپروفایلومتر)" },
          ],
        },
        {
          id: "3",
          headline: "اپتوالکترونیک",
          products: [
            { id: "1", name: "دوربین پایش کوره دمای بالا" },
            { id: "2", name: "مدولاتور فضایی نور" },
            { id: "3", name: "منبع نور ال ای دی سه رنگ" },
            { id: "4", name: "منبع نور لیزر دیود" },
          ],
        },
        {
          id: "4",
          headline: "اپتومکانیک",
          products: [
            { id: "1", name: "جابجاگر خطی موتوری" },
            { id: "2", name: "نانوجابجاگر پیزوالکتریک" },
            { id: "3", name: "نانوجابجاگر خطی دستی" },
            { id: "4", name: "جابجاگرهای مینیاتوری یک، دو و سه‌بعدی" },
            { id: "5", name: "جابجاگرهای خطی دستی یک، دو و سه‌بعدی" },
            { id: "6", name: "نگهدارنده قابل تنظیم" },
            { id: "7", name: "نگهدارنده قابل تنظیم قطعات مدور" },
            { id: "8", name: "پالایه فضایی" },
          ],
        },

       



        {
          id: "5",
          headline: " المان‌های اپتیکی",
          products: [
            { id: "1", name: "مجموعه عدسی اپتیکی" },
            { id: "2", name: "مجموعه آینه اپتیکی" },
            { id: "3", name: "روزنه ریز دقیق (پین‌هول)" },
          ],
        },
      ],
    },
    {
      id: "3",
      menuTitle: "خدمات",
      route:"services"
    },
    { id: "4", menuTitle: "اخبار",route:"news" },
    { id: "5", menuTitle: "درباره ما",route:"about" },
    { id: "6", menuTitle: "تماس با ما",route:"contact" },
  ];
  useEffect(()=>{

    locale==='en' ? setMenuData(menusDataEn) : setMenuData(menusDataFa)
    
  },[])
  

  return (
    <div className={styles.navbar}>
      <div className=" w-full h-full flex flex-col items-center justify-center p-5 ">
        <div className={styles.navbar__content}>
          {/* search */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsShowSearchBoxr(!isShowSearchBox)}
          >
            {isShowSearchBox ? (
              <IoIosClose  className="text-2xl cursor-pointer" />
            ) : (
              <IoIosSearch className="text-2xl cursor-pointer" />
            )}
          </div>
          <div> Logo</div>
          <div className={styles.navabrItems__content}>
            <div className={styles.menu__content}>
              <ul>
                { menuData?.map((menuItem) => (
                  <div key={menuItem.id}>
                    <li  className={styles.menuItem}>
                      <Link href={menuItem.route} className="flex items-center justify-between"><span>{menuItem.menuTitle}</span>
                        {/* {menuItem.category && (
                          <MdArrowForwardIos className={styles.arrowSubroutes} />
                        )} */}
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
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end">

              <ChangeLanguage />
                  <span className="mx-3 ">
                    <Link href={`${locale}/signup`}>
                        <FaUser className="cursor-pointer"/>
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
            placeholder={tSearch('placeholder')}
            className="w-full py-1 bg-transparent  px-4 outline-none  placeholder:text-sm text-sm"
          />
          <IoIosSearch className={`text-2xl cursor-pointer  -translate-y-1 ${locale === 'en' ? '-translate-x-2':"translate-x-2"}`} />
        </div>
        {/* )} */}

        {/* collaps content */}

        <aside
          className={`${styles.collapsMenu__content} ${
            isShowSidebar ? "left-0" : "-left-[150vw]"
          }`}
          ref={sidebarRef}
          onAnimationEnd={sidebarAnimation}
        >
          <ul className="bg-primary2/25 ">
            {menusDataEn.map((menu) => (
              <NavbarItems key={menu.id} menuItem={menu} />
            ))}
          </ul>
          <div>SignIn/SignUp</div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
