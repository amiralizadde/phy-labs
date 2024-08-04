import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const locale = useLocale();
  return (
    <div className="px-5 sm:px-10">
      {/* banner */}
      <div>
        <div className="rounded overflow-hidden rounded-t-3xl mt-3">
          <Image
            src="/assets/banner2.png"
            width={1000}
            height={500}
            alt="banner phy-labs Services"
            className="w-full  h-[30vw] object-cover object-bottom"
          />
        </div>
        <div>
          <p className="sm:px-16 py-2 text-sm sm:text-base leading-7 text-start sm:py-6 font-medium sm:leading-8 sm:text-center">
            The laboratory services center of Phylabs Company is ready to
            provide services to students, researchers, and industries. Standard
            and advanced equipment are available in the above sections. You can
            review each section and submit a request for the desired analysis
            and testing."
          </p>
        </div>
      </div>

      {/* servises */}
      <div className="w-3/5 mx-auto  grid grid-cols-2   gap-10 child:p-5 ">
        <Link href={`/${locale}/services/NanoProfilometer`}>
          <div className="flex flex-col items-center justify-between h-full py-3 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
            <div>
              <Image
                src="/assets/servise1.png"
                width={1000}
                height={500}
                alt="phy-labs service1"
                className="w-[300px] h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold mt-4">Nano profilometer</p>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/services/NanoProfilometer`}>
          <div className="flex flex-col items-center justify-between h-full py-3 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
            <div>
              <Image
                src="/assets/servise2.png"
                width={1000}
                height={500}
                alt="phy-labs service1"
                className="w-[350px] h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold mt-4">Micro profilometer</p>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/services/NanoProfilometer`}>
          <div className="flex flex-col items-center justify-between h-full py-3 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
            <div>
              <Image
                src="/assets/servise3.png"
                width={1000}
                height={500}
                alt="phy-labs service1"
                className="w-[350px] h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold mt-4">Micro machining</p>
            </div>
          </div>
        </Link>
        <Link href={`/${locale}/services/NanoProfilometer`}>
          <div className=" flex flex-col items-center justify-between h-full py-3 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200">
            <div>
              <Image
                src="/assets/servise4.png"
                width={1000}
                height={500}
                alt="phy-labs service1"
                className="w-[300px] h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold mt-4">Lithography</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
