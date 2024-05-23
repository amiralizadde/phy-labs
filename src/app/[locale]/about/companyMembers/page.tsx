import Image from "next/image";
import React from "react";
import styles from "../../../../styles/about/About.module.css";

const CompanyMembers = () => {
  return (
    <div className="mt-32">
      <div> breadcrump </div>
      {/* title */}
      {/* <div className="shadow flex items-center justify-center pt-3 pb-5">
        <p className=" text-xl sm:text-2xl lg:text-4xl transition-all duration-200 font-medium">
          Compony Members
        </p>
      </div> */}

      <div className="mt-10">
        <div className="grid grid-cols-10">

        
        <div className={styles.members_body}>
          <div className={styles.title}>
            Company Members
          </div>
          <div className="grid gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
              <div className={styles.members_items}>
                <div className="rounded-full overflow-hidden border-2 border-primary  w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]">
                  <Image
                    src="/assets/manager.jpg"
                    width={1000}
                    height={500}
                    alt="image manager"
                    className=" w-full h-full object-cover "
                  />
                </div>
                <div className={styles.membersItems_textContent}>
                  <p> Dr. Hadi Borzouyi</p>
                  <p> CEO </p>
                  <p> PhD in Physics </p>
                  <p> Hakim Sabzevari faculty member </p>
                </div>
              </div>
              <div className={styles.members_items}>
                <div className="rounded-full overflow-hidden border-2 border-primary  w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]">
                  <Image
                    src="/assets/opeator.jpg"
                    width={1000}
                    height={500}
                    alt="image manager"
                    className="border w-full h-full object-cover  "
                  />
                </div>
                <div className={styles.membersItems_textContent}>
                  <p> Dr. Iman Ahadi Akhlaghi </p>
                  <p> Board of Directors Member </p>
                  <p> PhD in Physics & Telecommunication </p>
                  <p> Sajjad University faculty member </p>
                </div>
              </div>
              <div className={styles.members_items}>
                <div className="rounded-full overflow-hidden border-2 border-primary  w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]">
                  <Image
                    src="/assets/opeator.jpg"
                    width={1000}
                    height={500}
                    alt="image manager"
                    className="border w-full h-full object-cover  "
                  />
                </div>
                <div className={styles.membersItems_textContent}>
                  <p> Dr. Ehsan Ahadi Akhlaghi </p>
                  <p> Chairman of the Board </p>
                  <p> PhD in Physics </p>
                  <p> IASBS faculty member </p>
                </div>
              </div>
              <div className={styles.members_items}>
                <div className="rounded-full overflow-hidden border-2 border-primary  w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]">
                  <Image
                    src="/assets/manager.jpg"
                    width={1000}
                    height={500}
                    alt="image manager"
                    className="border w-full h-full object-cover  "
                  />
                </div>
                <div className={styles.membersItems_textContent}>
                  <p> Dr. Mohammad Charsooghi </p>
                  <p> Vice Chairman of the Board </p>
                  <p> PhD in Physics </p>
                  <p> Computer Vision Data Scientist at </p>
                  <p> OD-OS GmbH (Berlin, Germany) </p>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMembers;
