

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";


const TestNanoProfilometer = () => {
  const [tabNanoProfilometer, setTabNanoProfilometer] =
    useState<string>("Intro");
  return (
    <div className="p-5 sm:p-10 bg-[#f9f9f9]">
      {/* banner */}
      <div>
        <div className="rounded overflow-hidden rounded-t-3xl mt-3 border">
          <Image
            src="/assets/bannerNanoProfilometer1.png"
            width={1000}
            height={500}
            alt="banner phy-labs Services"
            className="w-full  h-[20vw] object-fill"
          />
        </div>
      </div>

      {/* descriptions */}
      <div className="grid grid-cols-6 child:py-5 child:px-3 items-center border">
        <div className="col-span-5 md:col-span-2  ">
          {/* <p className="text-xl font-bold">Nano profilometer</p> */}
          <p className="py-3 text-sm font-medium md:w-4/5 leading-9">
            Nano-precision 3D measurements Dimensional geometry – GD&T
            parameters Roughness measurement Defect detection – cracks,
            scratches Thickness measurement of semi-transparent materials
          </p>
        </div>
        <div className="col-span-5 md:col-span-2  ">
          <Image
            src="/assets/pics_products/p_6.png"
            width={1000}
            height={500}
            alt="banner phy-labs Services"
            className="w-full  h-[20vw] object-fill"
          />
        </div>
        <div className="border flex flex-col items-center justify-evenly">
          <p>Catalog</p>
          <p>Image Place</p>
          {/* <Image
            src="/assets/bannerNanoProfilometer1.png"
            width={1000}
            height={500}
            alt="banner phy-labs Services"
            className="w-full  h-[20vw] object-fill"
          /> */}
          <button>Downloads</button>
        </div>
      </div>

      {/* Information Tbm */}
      <div className="grid grid-cols-5   p-2  ">
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
                  tabNanoProfilometer === "Benefit"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabNanoProfilometer("Benefit")}
              >
                Benefit
              </li>
              <li
                className={`${
                  tabNanoProfilometer === "Applications"
                    ? "bg-primary text-white"
                    : ""
                }`}
                onClick={() => setTabNanoProfilometer("Applications")}
              >
                Applications
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
        {tabNanoProfilometer === "Benefit" && (
          <div className="col-span-5">
            <button className="font-bold text-blue-600">
              Wide range of materials:
            </button>
            metal, plastics, polymers, glass, metal coatings, silicone,
            adhesives; reflective, transparent, semi-transparent, specular,
            nonspecular <br />
            <span className="font-bold">Wide range of surfaces:</span>
            measured objects can be stationary or moving, solid or liquid, and
            include interiors of bores and tubes, exteriors of cylinders,
            concave or convex spherical shapes <br />
            <span className="font-bold">
              Small-diameter probes reach in tomeasure insides of bores and
              small-diameter tubes
            </span>
            <br />
            <span className="font-bold">
              Measures high-aspect-ratio features:
            </span>
             undercuts, cross-holes, chamfers, rifling, threads, O-ring grooves,
            and edges <br />
            <span className="font-bold"> Reduced inspection cycletime:</span> up
            to 100,000 measurements per second, each representing a 3D
            topographic point <br />
            <span className="font-bold"> Versatility of setup:</span>
             Non-contact probes work up to 1 m away from surface and several
            meters from the interferometer <br />
            <span className="font-bold">
              Continuous, long profile scanning:
            </span>
            no area stitching required <br />
            <span className="font-bold">
              Flexible options for evaluating inspected parts:
            </span>
            measured features can be compared to CAD drawings or to a
            user-defined set of <br />
            locations, nominals, and tolerances <br />
            <span className="font-bold">
              Simple scan definition and execution:
            </span>
            The scanning sequence is defined once by teaching the system with a
            joystick. The scanning sequence can later be executed with the push
            of a button.

            <div className="flex items-center justify-between my-8">
                <span className="font-bold text-xl">more</span>
                <hr  className="h-[3px] w-full mx-5 bg-black"/>
                <BiSolidDownArrow  className="text-2xl"/>
            </div>
          </div>
        )}
        {tabNanoProfilometer === "Applications" && (
          <div className="col-span-5 ">
            
            <div className="grid grid-cols-10">
                

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

export default TestNanoProfilometer;
