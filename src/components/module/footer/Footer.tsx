import React from "react";
import styles from "../../../styles/footer/footer.module.css";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2e3133]">
        {/* top */}
        <div className="grid lg:grid-cols-2 xs:p-5  sm:px-28 sm:py-10 ">
          <div className="p-5  ">
            <p className="sm:text-4xl font-bold text-white">
              Quick Delivery and Comprehensive Support
            </p>
            <p className="mt-4 text-sm font-light sm:w-4/5 text-justify text-white/50">
              KEYENCE supports customers from the selection process to line
              operations with on-site operating instructions and after-sales
              support.
            </p>
          </div>
          <div className=" flex items-center sm:items-start ps-5 py-2 xs:p-5  ">
            <div className="flex items-start flex-col ">
              <span className="font-light text-sm text-white/50">
                Contact Us
              </span>
              {/* <span className="text-white mt-2"> +32754875 </span> */}
              <button className="py-1 px-3 text-white bg-primary rounded-sm mt-2 text-xs sm:py-2 sm:px-8 sm:text-sm">
                Contact Us
              </button>
            </div>
            <div className="flex items-start flex-col ms-10 ">
              <span className="font-light text-sm text-white/50">
                For Your Support
              </span>
              <button className="py-1 px-3 text-white bg-primary rounded-sm mt-2 text-xs sm:py-2 sm:px-8 sm:text-sm">
                more about
              </button>
            </div>
          </div>
        </div>

        {/* bootom */}
        <div className="bg-[#484b4c] ms-5 sm:ms-24 rounded-s-lg mt-10 sm:rounded-s-3xl">
          <div className="ps-5 sm:ps-10  grid grid-cols-1 lg:grid-cols-3 lg:pt-20 lg:pb-10 child:flex child:flex-col child:items-start child:p-2">
            <div className="">
                <div className="child:my-2">
                    <p className="text-white">logo</p>
                    <p className="text-sm font-bold text-white ">KEYENCE CORPORATION OF AMERICA</p>
                    <p className="text-sm font-light text-white/50" >500 Park Boulevard, Suite 200, Itasca, IL 60143, U.S.A.</p>
                </div>
            </div>
            <div>
              <ul className="child:text-white child:text-sm  child:my-2">
                <li>product1</li>
                <li>product2</li>
                <li>product3</li>
                <li>product4</li>
              </ul>
            </div>
            <div>
                <div className="child:text-sm child:text-white child:my-2">
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
          </div>

          {/* social */}
          <div className="grid  grid-cols-1 lg:grid-cols-2 items-center ps-5 sm:ps-10 pb-5 child:py-5">
            <div className="flex  items-start child:me-5 child:text-3xl child:text-white child:transition-all child:duration-200 hover:child:scale-110 hover:child:cursor-pointer">
                <FaLinkedin className="hover:text-blue-700"/>
                <FaInstagram className="hover:text-red-700"/>
                <FaTelegram className="hover:text-blue-700"/>
                <FaXTwitter className="hover:text-black"/>
            </div>
            <div className=" text-xs text-white/50 " > Copyright (C) 2024 KEYENCE CORPORATION. All Rights Reserved. </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
