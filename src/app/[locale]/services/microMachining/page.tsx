"use client";
import Image from "next/image";
import React, { useState } from "react";

const MicroMachining = () => {
  const [tabMicroMachining, setTabMicroMachining] = useState<string>("Intro");
  return (
    <div className="p-5 sm:p-10 bg-[#f9f9f9]">
      {/* banner */}
      <div>
        <div className="rounded overflow-hidden rounded-t-3xl mt-3">
          <Image
            src="/assets/microMachining.png"
            width={1000}
            height={500}
            alt="banner phy-labs Services"
            className="w-full  h-[30vw] object-cover object-bottom"
          />
        </div>
      </div>

      {/* descriptions */}
      <div className="grid grid-cols-5 child:py-5 child:px-3 my-3">
        <div className="col-span-5 md:col-span-3  ">
          <p className="text-xl font-bold">Micro machining</p>
          <p className="py-3 text-sm font-medium md:w-4/5 leading-7">
            Micromachining is considered a high-precision material removal
            process capable of achieving micron-level surface shapes. Key areas
            of focus include understanding chip formation mechanisms,
            micromachining mechanics, and the design of tools with optimal
            dynamic stiffness and cutting tool geometry. Additionally,
            controlling movement and processes that can be inspected with
            high-resolution measurements are critical. This involves the
            development and implementation of advanced techniques to ensure
            accuracy and reliability in micromachining applications..
          </p>
        </div>
        <div className="col-span-5 md:col-span-2  ">
          <p className="text-base font-bold">Data Sheet</p>
          <p className="py-3 text-sm font-medium mf:w-4/5 leading-7">
            For more information
          </p>
          <div className="flex flex-col items-start justify-start child:mt-2">
            <span>Downloads :</span>
            <button className="font-bold text-primary">Catalogue</button>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="grid grid-cols-5   p-2  lg:-translate-y-10">
        <div className="col-span-5 lg:col-span-3 border-t-2 border-t-black lg:border-e-2 border-e-black">
          {/* headers tabs */}
          <div className="px-3 my-3">
            <ul className="flex flex-col lg:flex-row items-center justify-between child:text-sm child:font-medium child:hover:cursor-pointer child:border-b child:shadow  child:w-full child:text-center child:ms-2 child:py-2 child:rounded">
              <li
                className={`${
                  tabMicroMachining === "Intro" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabMicroMachining("Intro")}
              >
                Intro
              </li>
              <li
                className={`${
                  tabMicroMachining === "Image Data"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabMicroMachining("Image Data")}
              >
                Image Data
              </li>
              <li
                className={`${
                  tabMicroMachining === "Lab. Details"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabMicroMachining("Lab. Details")}
              >
                Lab. Details
              </li>
              <li
                className={`${
                  tabMicroMachining === "Submit request"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabMicroMachining("Submit request")}
              >
                Submit request
              </li>
              <li
                className={`${
                  tabMicroMachining === "Form" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabMicroMachining("Form")}
              >
                Form
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 lg:border-b-2 border-b-black">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia tempora nobis quas corrupti doloremque saepe? */}
        </div>
      </div>
      {/* Dynamic information */}
      <div className="grid grid-cols-5 ">
        {tabMicroMachining === "Intro" && (
          <>
            <div className="col-span-5  text-center  text-xs xs:text-sm p-3 lg:p-10 font-medium leading-7 xs:leading-8">
              Micromachining is considered a high-precision material removal
              process capable of achieving micron-level surface shapes. Key
              areas of focus include understanding chip formation mechanisms,
              micromachining mechanics, and the design of tools with optimal
              dynamic stiffness and cutting tool geometry. Additionally,
              controlling movement and processes that can be inspected with
              high-resolution measurements are critical. This involves the
              development and implementation of advanced techniques to ensure
              accuracy and reliability in micromachining applications
            </div>
            <div className="col-span-3">video</div>
          </>
        )}
        {tabMicroMachining === "Image Data" && (
          <div className={`col-span-5  even:child:rtl `}>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/microProfilometerImg1.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-[250px] h-[300px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Micromachining parts even smaller than 0.25 mm (0.10 in) cubed.
                That’s smaller than a grain of salt! Typical outer dimensions
                for these parts are smaller than 1mm, with features that measure
                in microns. Micro parts can be made with square or rounded
                edges, open or slotted holes, and more.
              </div>
            </div>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/microProfilometerImg2.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-full h-[250px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Micromachining parts even smaller than 0.25 mm (0.10 in) cubed.
                That’s smaller than a grain of salt! Typical outer dimensions
                for these parts are smaller than 1mm, with features that measure
                in microns. Micro parts can be made with square or rounded
                edges, open or slotted holes, and more. We have devoted
                ourselves to developing custom microfabrication technology,
                enabling us to produce incredibly precise, high-quality, and
                tiny parts
              </div>
            </div>
          </div>
        )}
        {tabMicroMachining === "Lab. Details" && (
          <div className="col-span-5 ">
            <div className="child:text-sm child:my-4 child:font-medium border border-primary w-4/5 mx-auto px-16 py-5 rounded-[90px] bg-white">
              <p>Laboratory ... Faculty ...</p>
              <ul className="list-disc ms-14 child:my-2">
                <li> Laboratory Technical Manager Name</li>
                <li>Laboratory Control Code</li>
                <li>Test Name</li>
                <li> Type of Test Unit: minutes or ...</li>
                <li> Work Range:</li>
                <li>
                  Test Description: For example, the cost for each test is
                  calculated based on the time unit (the test fee for each unit
                  of time).{" "}
                </li>
              </ul>
              <p>
                If the duration exceeds the specified time unit, for each
                additional minute beyond the set time unit, the cost per minute
                is ...
              </p>

              <ul className="list-disc ms-14 child:my-2 py-3 ">
                <li>Equipment Specifications</li>
                <li>Brand (Model):</li>
                <li>Application</li>
                <li>Service Description</li>
              </ul>
              <ul className="list-disc ms-14 child:my-2 mt-16">
                <li>Contact Information</li>
                <li>Operator Name</li>
                <li>Address</li>
                <li>Phone</li>
                <li>Email</li>
              </ul>
              <div className="flex items-center justify-end">
                <button className=" py-2 px-10 border bg-primary rounded text-white text-sm">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        )}
        {tabMicroMachining === "Submit request" && (
          <div className="child:mb-16 ps-16 col-span-5 lg:col-span-3  text-xs xs:text-sm leading-7 xs:leading-8 p-3 lg:p-10 font-medium ">
            <ul>
              <li className="list-disc">
                <p className="font-bold">Positioning device </p>
                <span className="text-sm">
                  for our propulsion lasers, standing. <br />
                  Serves for quick and precise laser assembly. <br />
                  Particularly advantageous height and lateral fine adjustment.
                </span>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <p className="font-bold"> Connection cable: </p>
                <span className="text-sm">
                  20 m long connection cable for connecting our TBM Guide lasers{" "}
                  <br />
                  1st side: CACOM connector, 3-pin, with pins, union nut
                  <br />
                  2nd side: CACOM connector, 3-pin, with socket, union nut
                </span>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <p className="font-bold"> Transport case Cubic orange</p>
                <span className="text-sm">
                  for TBM Guide lasers with round design,
                </span>
              </li>
            </ul>
          </div>
        )}
        {tabMicroMachining === "Form" && "Form"}
      </div>
    </div>
  );
};

export default MicroMachining;
