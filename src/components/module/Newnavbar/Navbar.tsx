"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdOutlineSearch } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaIdCardAlt } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../../../styles/newNavbar/newnavbar.module.css";
import { useLocale, useTranslations } from "next-intl";
import { IoIosArrowForward } from "react-icons/io";
import { product } from "@/types/productTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const [isShowSearchbox , setIsShowSearchbox] = useState<boolean>(false)
    const [isShowSidebar , setIsShowSidebar] = useState<boolean>(false);
    const [allCategory, setAllCategory] = useState<product[] | null>(null);
    const locale = useLocale()
    const router = useRouter()
    const t = useTranslations("navbar")
    const tsearch = useTranslations("search")

    useEffect(()=>{
        getAllProducts();
        if (window.innerWidth >= 1024) {
            setIsShowSearchbox(true)
        }
    },[])

    useEffect(() => {
        console.log('allCategory ->' , allCategory);
        
      }, [allCategory]);
    
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
    <div className="">
      <div className="">
        {/* pc */}
        <div className="hidden lg:block mt-3">
            <div className="px-10 xl:px-32 pb-3 flex items-end justify-between">

                {/* phy-labs logo */}
                <Link href={`/${locale}/`}>
                    <div className=" h-full cursor-pointer">
                    <Image src="/assets/logo/PhyLabs.png" width={1000} height={500} alt="phy-labs logo" className=" lg:h-24 lg:w-24 object-contain" />
                    </div>
                </Link>

                <div className=" h-full ">
                    <div className="">
                        {/* top navbar   */}
                        <ul className="flex items-center justify-end child:mx-2 child:text-xs child:text-gray-900">
                            <li className="text-xs hover:border-b hover:border-b-black hover:text-black ">
                                <Link href={`/${locale}/auth/identification`}>
                                    <p>
                                        <span className="">{t('Signin')}</span>
                                        <span className="mx-1">/</span>
                                        <span className="">{t('Register')}</span>
                                    </p>
                                </Link>
                            </li>
                            <span>|</span>
                            <li className="text-xs flex items-center">
                                <FaIdCardAlt className="text-sm mx-1" />
                                <span>Careers</span>
                            </li>
                            <li className="text-xs flex items-center ">
                                <MdOutlineLanguage  className="text-sm mx-1"/>
                                <span onClick={(e)=>router.replace(`/fa`)} className="hover:underline hover:cursor-pointer">Persian</span>
                                <span>/</span>
                                <span onClick={(e)=>router.replace(`/en`)} className="hover:underline hover:cursor-pointer">English</span>
                            </li>
                            <span>|</span>
                            <li className="flex items-center child:text-base child:font-bold">
                                <MdLocalPhone className="w-5 h-5 mx-2 text-blue-900" />
                                <span>{t('phone')}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-7  child:text-sm">
                        {/* bottom navbar list menu */}
                        <ul className="flex items-center justify-end child:ps-10  child:py-3">
                            <li className={styles.menuItem}>
                                <Link href={`/${locale}/products`}><span className="font-bold">{t("products")}</span></Link>
                                <MdOutlineKeyboardArrowDown className="w-7 h-5 text-primary"/>
                                {
                                    allCategory &&(
                                        <div className={styles.menuItem__content}>
                                            <div className={styles.menuItem__background}>
                                                <div className={styles.menuItem__parent}>
                                                    {
                                                        allCategory.map((category)=>(
                                                            <div key={category._id} className="">
                                                                <p className="font-bold">{category.headline}</p>
                                                                {
                                                                    category.products.map((product)=>(
                                                                        <div className="mt-2">
                                                                            <span className="text-sm font-medium hover:text-primary">{product.name}</span>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                    {/* Edit */}
                                                     <div className="">
                                                            <p className="font-bold">Shop</p>
                                                                
                                                                <div className="mt-2">
                                                                    <Link href={`/${locale}/optoMechanic`}><span className="text-sm font-medium hover:text-primary">Go to shop</span></Link>
                                                                </div>
                                                                  
                                                     </div>
                                                </div>
                                             </div>
                                        </div>
                                    )
                                    
                                }
                            </li>
                            <li className="font-bold">{t('downloads')}</li>
                            <li className="font-bold">{t('services')}</li>
                            <li className={styles.menuItem}>
                                <span className="font-bold">{t('about')}</span>
                                <MdOutlineKeyboardArrowDown className="w-7 h-5 text-primary"/>
                                <div  className={styles.menuItem__content}>
                                    <div className={styles.menuItem__background}>
                                        <div className={styles.menuItem__parent}>
                                               <Link href={`/${locale}/about/companyMembers`}>
                                                 <div className="font-bold hover:text-primary">
                                                        <Image src='/assets/company-members.jpg' width={500} height={200} alt="compant members " className="h-28 w-56 object-cover"/>
                                                        <p className="hover:text-primary text-xs flex items-center mt-3" >
                                                            <span>{t('company-members')}</span>
                                                            <IoIosArrowForward  className="mx-3"/>
                                                        </p>
                                                  </div>
                                                </Link>
                                            <Link href={`/${locale}/about/companyHistory`}>
                                                <div className="font-bold mx-10 hover:text-primary">
                                                    <Image src='/assets/company-history.jpg' width={500} height={200} alt="compant members " className="h-28 w-56 object-cover"/>
                                                    <p className="hover:text-primary text-xs flex items-center mt-3" >
                                                        <span>{t('company-history')}</span>
                                                        <IoIosArrowForward  className="mx-3"/>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="font-bold">{t('sustainability')}</li>
                            <Link href={`/${locale}/contact`}><li className="font-bold">{t('contact')}</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>







        {/* mobile */}
        <div className="lg:hidden mt-3 flex items-center justify-between px-4 w-full">
          <div className="flex">
            <CgMenu className="w-6 h-6" onClick={()=>setIsShowSidebar(!isShowSidebar)} />
            {
             isShowSearchbox ? (
                <IoMdClose className="w-6 h-6 ms-6 cursor-pointer" onClick={()=>setIsShowSearchbox(!isShowSearchbox)}/>
                ):(
                <MdOutlineSearch className="w-6 h-6 ms-6 cursor-pointer" onClick={()=>setIsShowSearchbox(!isShowSearchbox)} />
                )
            }
          </div>
          <div>
            <Image src="/assets/logo/PhyLabs.png" width={1000} height={500} alt="phy-labs logo" className="h-14 w-14 lg:h-20 lg:w-20 object-contain" />
          </div>
          <div>
            <MdLocalPhone className="w-5 h-5 text-blue-900" />
          </div>
        </div>


      {/* searchbox */}

      {
         isShowSearchbox && (
            <div className="bg-primary2 py-3 px-5"> 
                <div >
                    <form className="flex items-center bg-white rounded lg:mx-10 xl:mx-32" >
                     <MdOutlineSearch className="w-6 h-6 ms-5"/>
                     <input type="text" className="w-full p-3 text-sm outline-none rounded" placeholder={tsearch('placeholder')} />
                    </form>
                </div>
            </div>
         )
      }
      </div>

            {/* collaps content */}
           
                  { isShowSidebar && (
                    <aside className={styles.aside__content}>
                        <ul className="child:flex child:items-center child:justify-start child:border-b child:border-black/25 child:p-3 child:font-medium">
                            <li>
                                <span>Products</span>
                                <IoIosArrowForward className="mx-2 text-primary" />
                            </li>
                            <li>Downloads</li>
                            <li>Services</li>
                            <li>
                            <span>About</span>
                            <IoIosArrowForward className="mx-2 text-primary" />
                            </li>
                            <li>Sustainability</li>
                            <li>Contact</li>
                        </ul>
                    </aside>
                  )
                    }
      
    </div>
  );
};

export default Navbar;
