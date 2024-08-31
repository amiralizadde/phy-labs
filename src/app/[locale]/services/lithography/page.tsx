"use client";
import Image from "next/image";
import React, { useState } from "react";

const Lithography = () => {
  const [tabLithography, setTabLithography] = useState<string>("Intro");
  return (
    <div className="p-5 sm:p-10 bg-[#f9f9f9]">
      {/* banner */}
      <div>
        <div className="rounded overflow-hidden rounded-t-3xl mt-3">
          <Image
            src="/assets/Lithography.png"
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
          <p className="text-xl font-bold">Lithography</p>
          <p className="py-3 text-sm font-medium md:w-4/5 leading-7">
            The lithography machine, a complex piece of equipment with key
            components such as the laser light source, objective lens system,
            table system, mask table system, mask transfer system, silicon
            transfer system, and exposure system, transmits a light beam through
            a mask with a circuit diagram, scales down the diagram, and maps it
            onto a wafer by using various light source energy and shape control
            methods while compensating for optical errors through the objective
            lens.
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
                  tabLithography === "Intro" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabLithography("Intro")}
              >
                Intro
              </li>
              <li
                className={`${
                  tabLithography === "Image Data" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabLithography("Image Data")}
              >
                Image Data
              </li>
              <li
                className={`${
                  tabLithography === "Lab. Details"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabLithography("Lab. Details")}
              >
                Lab. Details
              </li>
              <li
                className={`${
                  tabLithography === "Submit request"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabLithography("Submit request")}
              >
                Submit request
              </li>
              <li
                className={`${
                  tabLithography === "Form" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabLithography("Form")}
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
        {tabLithography === "Intro" && (
          <>
            <div className="col-span-5  text-center  text-xs xs:text-sm p-3 lg:p-10 font-medium leading-7 xs:leading-8">
              Raith offers laser lithography systems ranging from tabletop
              systems for up to 4” substrates to standalone systems that cover
              any sample from 5 mm to 8” and beyond. Raith’s laser lithography
              systems are user-friendly maskless lithography tools that deliver
              excellent performance in producing microstructures with the
              highest resolution available in the market
            </div>
            <div className="col-span-3">video</div>
          </>
        )}
        {tabLithography === "Image Data" && (
          <div className={`col-span-5  even:child:rtl `}>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/LithographyImg1.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-[250px] h-[300px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Josephson junctions made of niobium Resolution up to 30
                nanometers on a silicon wafer is easily achievable
              </div>
            </div>
            <div className="grid grid-cols-4 items-center text-justify leading-8 px-5">
              <div>
                <Image
                  src="/assets/LithographyImg2.png"
                  width={1000}
                  height={500}
                  alt="phy-labs data image"
                  className="w-full h-[250px] object-contain"
                />
              </div>
              <div className="col-span-3 px-8 font-medium">
                Optical microscope image of a predefined pattern fabricated
                using electron beam lithography.
              </div>
            </div>
          </div>
        )}
        {tabLithography === "Lab. Details" && (
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
        {tabLithography === "Submit request" && (
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
        {tabLithography === "Form" && "Form"}
      </div>
    </div>
  );
};

export default Lithography;
