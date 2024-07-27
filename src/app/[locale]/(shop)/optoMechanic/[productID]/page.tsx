"use client";
import Breadcrumb from "@/components/module/breadcrump/Breadcrumb";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import styles from "@/styles/shop/optoMechanic.module.css";

const ProductDetails = () => {
  const locale = useLocale();
  const [tabInfo, setTabInfo] = useState<string>("Description");

  return (
    <div>
      {/* container */}
      <div className="ps-3 xs:px-10">
        {/* Breadcrumb */}
        <div className="my-5 xs:mt-10 xs:mb-5">
          <Breadcrumb
            homeElement={locale === "en" ? "Home" : "خانه"}
            separator="/"
            containerClasses="breadcrumbs"
            listClasses="breadcrumb-item"
            activeClasses="active"
            capitalizeLinks={true}
          />
        </div>

        {/* top content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 child:me-auto sm:child:ms-auto sm:child:me-0 gap-y-5 lg:child:mx-auto">
          {/* img */}
          <div className="">
            <Image
              src="/assets/pics_products/p_6.png"
              width={1000}
              height={500}
              alt="name product"
              className="w-[230px] sm:w-[300px] lg:w-[250px]  mx-auto"
            />
          </div>

          {/* description */}
          <div className="p-5">
            <div>
              <p className="font-semibold text-sm">
                10 mm thick aluminum optical board with hard anodized coating
              </p>
              <hr className="bg-black h-0.5 my-2" />
              <p className="text-sm font-medium text-black/75">
                4.6 points (13 buyers' points)
              </p>
            </div>
            <div className="my-3 text-sm">
              <p>Description of warranty and product type:</p>
            </div>
          </div>

          {/* box add to cart */}
          <div className="flex flex-col items-center justify-center py-5 px-2 border border-black w-[300px] ">
            <div className="text-xl font-medium">price :</div>
            <div className="mt-5 w-[200px]">
              <button className="bg-primary py-2 rounded text-white text-sm w-full">
                Add to Cart
              </button>
            </div>
            <div className="flex items-start w-full justify-start mt-5">
              <IoShieldCheckmarkOutline className="mx-2 text-2xl text-green-600" />
              <p className="text-xs font-medium">
                Fathoptics special service: 7-day product return guarantee
              </p>
            </div>
            <hr className="bg-black h-0.5 my-2" />
            <div className="flex items-center w-full justify-start">
              <FaShippingFast className="mx-2  text-gray-600" />
              <p className="text-xs font-medium">
                {" "}
                Shipping in 2 business days{" "}
              </p>
            </div>
          </div>
        </div>

        {/* information tabs content  */}
        <div className="border border-black my-10">
          <div className="p-2 child:mx-3 flex items-end justify-start">
            <div className="relative">
              <button
                onClick={() => setTabInfo("Description")}
                className={`${styles.tab} ${tabInfo === "Description" && styles.activeTab}`}
              >
                Description
              </button>
            </div>
            <div  className="relative">
              <button
                onClick={() => setTabInfo("Technical")}
                className={`${styles.tab} ${tabInfo === "Technical" && styles.activeTab}`}
              >
                <span>Technical</span>
                <br />
                <span>Specifications</span>
              </button>
            </div>
            <div  className="relative">
              <button
                onClick={() => setTabInfo("Feedback")}
                className={`${styles.tab} ${ tabInfo === "Feedback" && styles.activeTab}`}
              >
                Feedback
              </button>
            </div>
          </div>
          {/* Description content */}
          <div className="border border-black mt-3 p-5">
            {tabInfo === "Description" && (
              <div className="">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  ea ab voluptates, nam mollitia magnam odio reprehenderit
                  excepturi dignissimos ratione repellendus labore pariatur iste
                  voluptatum deleniti possimus debitis, fuga ipsam. Vitae quod
                  incidunt autem iusto mollitia necessitatibus quidem ratione,
                  id quos quia quas deserunt veritatis dolorem aperiam
                  cupiditate totam error? Quae aut natus fugit nulla tempora
                  asperiores qui, est voluptate. Harum quod magni quidem
                  deserunt molestias eum sint alias modi laborum, dolore,
                  deleniti ipsum neque. Dolore quis velit sed nostrum et saepe
                  explicabo provident cumque consequatur minus. Dolor, suscipit
                  inventore. Iste ratione velit officiis porro voluptatum
                  sapiente possimus corporis. Cum alias eveniet repudiandae?
                  Doloremque animi deleniti dolor id, quos iste, quis, minus et
                  ipsam porro dolores! Dolore fuga doloremque velit!
                  Perferendis, atque ratione. Laboriosam similique impedit
                  nostrum nemo, rem optio tempore? Officiis voluptatibus
                  temporibus iure perspiciatis impedit, laudantium mollitia
                  officia ipsam eaque neque harum obcaecati eveniet commodi quis
                  doloribus voluptatum? Sunt, exercitationem corrupti ab rem
                  dolorem neque architecto voluptates explicabo modi facilis
                  sapiente debitis blanditiis molestiae! Deleniti, sit fuga.
                  Mollitia doloremque doloribus dolor praesentium dolore, id
                  nemo itaque placeat eius. Nisi enim nulla nihil dicta animi
                  alias consequatur, adipisci commodi atque eos, cum veniam
                  velit accusamus distinctio repellat praesentium! Molestiae
                  natus minus ex magnam quisquam aperiam quia reprehenderit
                  iure! Ut! Tempora enim vitae ex totam. Rerum velit provident
                  maxime necessitatibus esse magnam illum a quaerat, fugit
                  maiores reprehenderit consequuntur? Ducimus sequi inventore
                  voluptate eaque veritatis dolorem qui fugit, eius dolor. Error
                  suscipit unde animi ipsum temporibus voluptate, odit eveniet
                  cumque aliquam eius sequi quos sit ea tempora cupiditate
                  fugiat. Accusantium eum sint atque a. Illum est maxime quam
                  deserunt quod? Tenetur tempora ut fuga obcaecati vero, dolor
                  autem, odit molestiae nobis, cum harum! Veritatis praesentium
                  recusandae tempora quia, reiciendis dolores alias at,
                  voluptatem soluta quae nihil cum, laudantium maxime
                  doloremque! Aut culpa omnis error delectus reiciendis rerum
                </p>
              </div>
            )}

            {/* Technical content */}
            {tabInfo === "Technical" && (
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  ea ab voluptates, nam mollitia magnam odio reprehenderit
                  excepturi dignissimos ratione repellendus labore pariatur iste
                  voluptatum deleniti possimus debitis, fuga ipsam. Vitae quod
                  incidunt autem iusto mollitia necessitatibus quidem ratione,
                  id quos quia quas deserunt veritatis dolorem aperiam
                  cupiditate totam error? Quae aut natus fugit nulla tempora
                  asperiores qui, est voluptate. Harum quod magni quidem
                  deserunt molestias eum sint alias modi laborum, dolore,
                  deleniti ipsum neque. Dolore quis velit sed nostrum et saepe
                  explicabo provident cumque consequatur minus. Dolor, suscipit
                  inventore. Iste ratione velit officiis porro voluptatum
                  sapiente possimus corporis. Cum alias eveniet repudiandae?
                  Doloremque animi deleniti dolor id, quos iste, quis, minus et
                  ipsam porro dolores! Dolore fuga doloremque velit!
                  Perferendis, atque ratione. Laboriosam similique impedit
                  nostrum nemo, rem optio tempore? Officiis voluptatibus
                  temporibus iure perspiciatis impedit, laudantium mollitia
                  officia ipsam eaque neque harum obcaecati eveniet commodi quis
                  doloribus voluptatum? Sunt, exercitationem corrupti ab rem
                  dolorem neque architecto voluptates explicabo modi facilis
                  sapiente debitis blanditiis molestiae! Deleniti, sit fuga.
                  Mollitia doloremque doloribus dolor praesentium dolore, id
                  nemo itaque placeat eius. Nisi enim nulla nihil dicta animi
                  alias consequatur, adipisci commodi atque eos, cum veniam
                  velit accusamus distinctio repellat praesentium! Molestiae
                  natus minus ex magnam quisquam aperiam quia reprehenderit
                  iure! Ut! Tempora enim vitae ex totam. Rerum velit provident
                  maxime necessitatibus esse magnam illum a quaerat, fugit
                  maiores reprehenderit consequuntur? Ducimus sequi inventore
                  voluptate eaque veritatis dolorem qui fugit, eius dolor. Error
                  suscipit unde animi ipsum temporibus voluptate, odit eveniet
                  cumque aliquam eius sequi quos sit ea tempora cupiditate
                  fugiat. Accusantium eum sint atque a. Illum est maxime quam
                  deserunt quod? Tenetur tempora ut fuga obcaecati vero, dolor
                  autem, odit molestiae nobis, cum harum! Veritatis praesentium
                  recusandae tempora quia, reiciendis dolores alias at,
                  voluptatem soluta quae nihil cum, laudantium maxime
                  doloremque! Aut culpa omnis error delectus reiciendis rerum
                </p>
              </div>
            )}

            {/* Feedback content */}
            {tabInfo === "Feedback" && (
              <div>
                <form className=" flex flex-col child:mb-3 items-center justify-end">
                    <textarea name="" id="" rows={6} placeholder="Comment" className="border p-4 border-black w-full rounded-xl">

                    </textarea>
                    <button type="submit" className="bg-primary px-16 py-2 text-white  font-medium rounded ms-auto me-0">
                        Send
                    </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
