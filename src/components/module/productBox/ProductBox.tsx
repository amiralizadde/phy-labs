import React from "react";
import styles from "../../../styles/allproducts/allproducts.module.css";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { productType } from "@/types/productTypes";
import Link from "next/link";
import { useLocale } from "next-intl";

type ProductBoxProps = {
  product: productType;
};

const ProductBox = ({ product }: ProductBoxProps) => {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/products/${product._id}`}>
      <div className={styles.productBox}>
        <div className={styles.productImgContent}>
          <div className="  w-3/4  -translate-y-10">
            <Image
              src={product.image}
              width={1000}
              height={500}
              alt="product image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <p className="flex items-center justify-between p-2 font-medium text-sm">
            <span className={styles.name}> {product.name} </span>
            <FaArrowRightLong className="text-primary" />
          </p>
          <hr />
          <p className="text-xs sm:text-sm  text-black py-3">
            KEYENCE Sensors are used to detect, measure, and inspect a target
            during a process to increase efficiency.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
