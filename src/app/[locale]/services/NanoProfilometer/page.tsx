"use client";
import Image from "next/image";
import React, { useState } from "react";

const NanoProfilometer = () => {
  const [tabNanoProfilometer, setTabNanoProfilometer] =useState<string>("Intro");
  return (
    <div className="p-5 sm:p-10 bg-[#f9f9f9]">
      {/* banner */}
      <div>
        <div className="rounded overflow-hidden rounded-t-3xl mt-3">
          <Image
            src="/assets/bannerNanoProfilometr.png"
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
          <p className="text-xl font-bold">Nano profilometer</p>
          <p className="py-3 text-sm font-medium md:w-4/5 leading-7">
            Nano profilometry services can measure biological, chemical,
            physical, and mechanical samples with nanometer accuracy, In
            addition to micrometer-level accuracy and repeatability, higher data
            acquisition speed, broader field of view, and the ability to measure
            larger roughness without reducing accuracy are among the strategic
            features and advantages of this product compared to devices with
            similar applications.
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
                  tabNanoProfilometer === "Intro" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabNanoProfilometer("Intro")}
              >
                Intro
              </li>
              <li
                className={`${
                  tabNanoProfilometer === "Image Data"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabNanoProfilometer("Image Data")}
              >
                Image Data
              </li>
              <li
                className={`${
                  tabNanoProfilometer === "Lab. Details"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabNanoProfilometer("Lab. Details")}
              >
                Lab. Details
              </li>
              <li
                className={`${
                  tabNanoProfilometer === "Submit request"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabNanoProfilometer("Submit request")}
              >
                Submit request
              </li>
              <li
                className={`${
                  tabNanoProfilometer === "Form" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabNanoProfilometer("Form")}
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
        {tabNanoProfilometer === "Intro" && (
          <>
            <div className="col-span-5  text-center  text-xs xs:text-sm p-3 lg:p-10 font-medium leading-7 xs:leading-8">
              Nano profilometry services can measure biological, chemical,
              physical, and mechanical samples with nanometer accuracy, In
              addition to micrometer-level accuracy and repeatability, higher
              data acquisition speed, broader field of view, and the ability to
              measure larger roughness without reducing accuracy are among the
              strategic features and advantages of this product compared to
              devices with similar applications
            </div>
            <div className="col-span-3">video</div>
          </>
        )}
        {tabNanoProfilometer === "Image Data" && (
          <div className={`col-span-5  even:child:rtl `}>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/dataImg1.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-[250px] h-[300px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Nano profilometry services can measure biological, chemical,
                physical, and mechanical samples with nanometer accuracy, In
                addition to micrometer-level accuracy and repeatability, higher
                data acquisition speed, broader field of view, and the ability
                to measure larger roughness without reducing accuracy are among
                the strategic features and advantages of this product compared
                to devices with similar applications
              </div>
            </div>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/dataImg2.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-full h-[250px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Nano profilometry services can measure biological, chemical,
                physical, and mechanical samples with nanometer accuracy, In
                addition to micrometer-level accuracy and repeatability, higher
                data acquisition speed, broader field of view, and the ability
                to measure larger roughness without reducing accuracy are among
                the strategic features and advantages of this product compared
                to devices with similar applications
              </div>
            </div>
          </div>
        )}
        {tabNanoProfilometer === "Lab. Details" && (
            <div className="col-span-5 ">
                    <div className="child:text-sm child:my-4 child:font-medium border border-primary w-4/5 mx-auto px-16 py-5 rounded-[90px] bg-white" >
                        <p>Laboratory ... Faculty ...</p>
                        <ul className="list-disc ms-14 child:my-2">
                            <li> Laboratory Technical Manager Name</li>
                            <li>Laboratory Control Code</li>
                            <li>Test Name</li>
                            <li> Type of Test Unit: minutes or ...</li>
                            <li> Work Range:</li>
                            <li>Test Description: For example, the cost for each test is calculated based on the time unit (the test fee for each unit of time). </li>
                        </ul>
                        <p>If the duration exceeds the specified time unit, for each additional minute beyond the set time unit, the cost per minute is ...</p>
                    
                       <ul  className="list-disc ms-14 child:my-2 py-3 ">
                            <li>Equipment Specifications</li>
                            <li>Brand (Model):</li>
                            <li>Application</li>
                            <li>Service Description</li>
                        </ul>
                         <ul  className="list-disc ms-14 child:my-2 mt-16">
                            <li>Contact Information</li>
                            <li>Operator Name</li>
                            <li>Address</li>
                            <li>Phone</li>
                            <li>Email</li>
                        </ul>
                        <div className="flex items-center justify-end">
                         <button className=" py-2 px-10 border bg-primary rounded text-white text-sm">Submit Request</button>
                        </div>
                    </div>
            </div>
        )}
        {tabNanoProfilometer === "Submit request" && (
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
        {tabNanoProfilometer === "Form" && "Form"}
      </div>
    </div>
  );
};

export default NanoProfilometer;

