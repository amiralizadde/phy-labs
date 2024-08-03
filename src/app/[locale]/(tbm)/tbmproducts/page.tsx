"use client";
import Tbm_HeaderSlider from "@/components/template/tbm/Tbm_HeaderSlider";
import { useState } from "react";

const TbmProducts = () => {
  const [tabTBM, setTabTBM] = useState<string>("Intro");
  return (
    <div className="p-5 sm:p-10">
      {/* header slider */}
      <Tbm_HeaderSlider />

      {/* descriptions */}
      <div className="grid grid-cols-5 child:py-5 child:px-3">
        <div className="col-span-5 md:col-span-3  ">
          <p className="text-xl font-bold">Laser Guide of TBM</p>
          <p className="py-3 text-sm font-medium md:w-4/5 leading-7">
            The PHYLABS tunneling laser represents an advanced evolution of our
            proven PHYLABS tunneling laser technology. Specially designed for
            Tunnel Boring Machine (TBM) operations, it is also versatile enough
            for a variety of other tasks. The PHYLABS tunneling laser developed
            positioning device ensures precise alignment of the target axis in
            both height and side. Additionally, it is suitable for sewer pipe
            laying and numerous other applications.
          </p>
        </div>
        <div className="col-span-5 md:col-span-2  ">
          <p className="text-base font-bold">Laser Guide of TBM</p>
          <p className="py-3 text-sm font-medium mf:w-4/5 leading-7">
            Our lasers benefit from decades of research, development, and
            production expertise in construction lasers. Their design,
            high-quality materials, and strict quality assurance processes
            ensure excellent functionality and durability. Exclusively made in
            GERMANY, our devices are globally acclaimed for their handling,
            precision, robustness, and quality.
          </p>
          <div className="flex flex-col items-start justify-start child:mt-2">
            <span>Downloads :</span>
            <button className="font-bold text-primary">Catalogue</button>
            <button className="font-bold text-primary">Instruction</button>
          </div>
        </div>
      </div>

      {/* Information Tbm */}
      <div className="grid grid-cols-5   p-2  lg:-translate-y-10">
        <div className="col-span-5 lg:col-span-3 border-t-2 border-t-black lg:border-e-2 border-e-black">
          {/* headers tabs */}
          <div className="px-3 my-3">
            <ul className="flex flex-col lg:flex-row items-center justify-between child:text-sm child:font-medium child:hover:cursor-pointer child:border-b child:shadow  child:w-full child:text-center child:ms-2 child:py-2 child:rounded">
              <li
                className={`${
                  tabTBM === "Intro" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabTBM("Intro")}
              >
                Intro
              </li>
              <li
                className={`${
                  tabTBM === "Sender" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabTBM("Sender")}
              >
                Sender
              </li>
              <li
                className={`${
                  tabTBM === "Receiver" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabTBM("Receiver")}
              >
                Receiver
              </li>
              <li
                className={`${
                  tabTBM === "Accessories" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabTBM("Accessories")}
              >
                Accessories
              </li>
              <li
                className={`${
                  tabTBM === "Guarantee" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setTabTBM("Guarantee")}
              >
                Guarantee
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
          {tabTBM === "Intro" && (
            <>
              <div className="col-span-5 lg:col-span-3  text-xs xs:text-sm p-3 lg:p-10 font-medium leading-7 xs:leading-8">
                The PHYLABS tunneling laser represents an advanced evolution of
                our proven PHYLABS tunneling laser technology. Specially
                designed for Tunnel Boring Machine (TBM) operations, it is also
                versatile enough for a variety of other tasks. The PHYLABS
                tunneling laser developed positioning device ensures precise
                alignment of the target axis in both height and side.
                Additionally, it is suitable for sewer pipe laying and numerous
                other applications
              </div>
              <div className="col-span-3">video</div>
            </>
          )}
          {tabTBM === "Sender" && (
            <div className="col-span-5 lg:col-span-3  text-xs xs:text-sm leading-7 xs:leading-8 p-3 lg:p-10 font-medium ">
              <div className="p-5 font-medium text-xs xs:text-sm leading-7 xs:leading-8">
                The PHYLABS tunneling laser, designed specifically for Tunnel
                Boring Machine (TBM) operations, is adaptable to various TBM
                models. It is also highly versatile, making it suitable for a
                range of tasks including pipe tunneling and sewer pipe
                installation. This device emits an automatically leveled or
                predefined inclined target beam, with adjustable laser power in
                5 levels ranging from 1 to 5 mW to meet different needs.
              </div>
              <ul className="child:list-disc child:ms-5 child:mt-4 p-4">
                <li className="">
                  <p className="font-bold ">Perfomrance features</p>
                  <p>Laser class 3R, laser power 5 mW</p>
                </li>
                <li>
                  <p className="font-bold">Fully automatic</p>
                  <p>
                    Automatic levelling, banking compensation, inclination
                    zeroing, direction centring and cut-out in case of
                    undervoltage or jerky movement.
                  </p>
                </li>
                <li>
                  <p className="font-bold">Robust metal housing</p>
                  <p>
                    Anodised, plastic-coated, filled with nitrogen, 100%
                    watertight.
                  </p>
                </li>
                <li>
                  <p className="font-bold">
                    Brightly illuminated, easily legible LCD display
                  </p>
                  <p>
                    Self-explanatory, for on/off, device data, company data,
                    lock function, inclination, algebraic sign, unit % or ‰,
                    direction limitation, centring, operating status.
                  </p>
                </li>
              </ul>

              <table className="   w-full sm:p-5 mt-5">
                <tbody className="xs:odd:child:bg-primary2 child:text-sm child:py-2">
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td >Laser classes :</td>
                    <td> Class 3R, 5 mW</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Laser </td>
                    <td>rot 658 nm</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Range</td>
                    <td>up to 500 m </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Beam diameter on the laser</td>
                    <td>13 mm, + ca. 5,5 mm pro 100 m </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Tilt range</td>
                    <td>- 10% to + 40% </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Reading accuracy</td>
                    <td>0,001 %</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td> permissible deviation</td>
                    <td>± 0,005 % </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Direction setting</td>
                    <td>5% (10 m per 100 m)</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>External power supply</td>
                    <td>from 10 to 13.8 Volt DC/ 0.4 A</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Undervoltage shutdown</td>
                    <td>Yes</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Waterproof </td>
                    <td>up to 3.5 m</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Temperature range</td>
                    <td>- 20° C bus + 50° C</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Weight</td>
                    <td>VL-70 3,1 kg + PH-80 2,2 kg = 5,3 kg</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>Guarantee</td>
                    <td>24 Fun</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-600  child:rounded child:text-sm border-b flex flex-col xs:flex-row justify-between">
                    <td>adjustment</td>
                    <td>possible in the field without opening the device.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {tabTBM === "Receiver" && (
            <div className="col-span-5 lg:col-span-3  text-xs xs:text-sm leading-7 xs:leading-8 p-3 lg:p-10 font-medium ">
              <div className="p-5 font-medium  leading-7">
                Accurate monitoring of a TBM's position and orientation in
                three-dimensional space is crucial to ensure it follows the
                planned alignment route precisely. Modern navigation systems
                achieve this by using an electronic target unit mounted on the
                TBM. The quicker and more accurately the TBM's position and
                orientation are determined, the faster any deviations can be
                corrected. This ensures the tunnel follows the planned route
                without noticeable directional corrections, saving construction
                time and enhancing the tunnel's quality for future use. PHYLABS
                TBM Laser Receiver provides an exceptionally fast and precise
                determination of position and orientation.
              </div>
              <ul className="child:list-disc child:ms-5 child:mt-4 p-4">
                <li className="">
                  <p className="font-bold ">Precise yaw determination </p>
                  <p>
                    Exact determination of the horizontal tendency thanks to
                    precise yaw measurement with an accuracy of ±1 mm/m & Large
                    yaw range of ±174 mm/m{" "}
                  </p>
                </li>
                <li>
                  <p className="font-bold">
                    Robust metal housing with Low weight
                  </p>
                  <p>
                    Anodised, plastic-coated, filled with nitrogen, 100%
                    watertight. <br /> With Low weight of only 7 kg. <br />{" "}
                    Protection class IP67.
                  </p>
                </li>
                <li>
                  <p className="font-bold">Machine offset, roll & pitch</p>
                  <p>
                    TBM lase Guide receiver can measure multiple navigation
                    parameters like : X, Y, Yaw, Roll, pitch
                  </p>
                </li>
                <li>
                  <p className="font-bold">Economical to repair</p>
                  <p>
                    Economical to repair in the case of a fault through the
                    modular design. For example, the complete target unit does
                    not have to be replaced if the front screen is damaged.
                  </p>
                </li>
              </ul>

              <table className="col-span-3   w-full p-5 mt-5">
                <tbody className="xs:odd:child:bg-primary2 child:text-sm  child:py-2 ">
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Accuracy in Y ,X </td>
                    <td>0.3 degree </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Accuracy in Yaw</td>
                    <td> ±5Cm </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Reception area</td>
                    <td>85m </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Reception angle</td>
                    <td> 100° </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td> Laser beam diameter </td>
                    <td> homogenous, 0 7 - 20 mm </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Wave length </td>
                    <td>610 - 900 nm</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td> Housing </td>
                    <td>watertight </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Power supply </td>
                    <td>from 10 to 13.8 Volt DC/ 0.4 A </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Current consumption</td>
                    <td>approx. 45mA </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Waterproof </td>
                    <td>up to 3.5 m</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Operation time </td>
                    <td> to 50 hours </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Dimensions</td>
                    <td> 140 x 67 x 32 mm </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Weight </td>
                    <td> 5,3 kg </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Certified </td>
                    <td> IP67</td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>Guarantee </td>
                    <td> 24 Fun </td>
                  </tr>
                  <tr className=" child:py-1 child:px-4 odd:child:font-bold even:child:text-gray-500  child:rounded child:text-sm border-b xs:border-b-0 flex flex-col xs:flex-row justify-between">
                    <td>adjustment </td>
                    <td>possible in the field without opening the device. </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {tabTBM === "Accessories" && (
            <div className="child:mb-16 ps-16 col-span-5 lg:col-span-3  text-xs xs:text-sm leading-7 xs:leading-8 p-3 lg:p-10 font-medium ">
              <ul>
                <li className="list-disc">
                  <p className="font-bold">Positioning device </p>
                  <span className="text-sm">
                    for our propulsion lasers, standing. <br />
                    Serves for quick and precise laser assembly. <br />
                    Particularly advantageous height and lateral fine
                    adjustment.
                  </span>
                </li>
              </ul>
              <ul>
                <li  className="list-disc">
                  <p className="font-bold"> Connection cable: </p>
                  <span  className="text-sm">
                    20 m long connection cable for connecting our TBM Guide
                    lasers <br />
                    1st side: CACOM connector, 3-pin, with pins, union nut
                    <br />
                    2nd side: CACOM connector, 3-pin, with socket, union nut
                  </span>
                </li>
              </ul>
              <ul>
                <li  className="list-disc">
                  <p className="font-bold"> Transport case Cubic orange</p>
                  <span  className="text-sm">for TBM Guide lasers with round design,</span>
                </li>
              </ul>
            </div>
          )}
          {tabTBM === "Guarantee" && "Guarantee"}
        </div>
     
    </div>
  );
};

export default TbmProducts;
