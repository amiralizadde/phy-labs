"use client";
import { useFormik } from "formik";
import styles from "../../../../styles/p-admin/product.module.css";
import { useLocale, useTranslations } from "next-intl";
import swal from "sweetalert";
import Link from "next/link";
import { createProductType } from "@/types/productTypes";
import { useEffect, useState } from "react";
import CKeditor from "@/components/template/editor/Editor";

// interface MyFormValues {
//   name: string;
//   // image: File;
//   description: string;
// }

const Products = () => {
  const locale = useLocale();
  const [img, setImg] = useState({});
  const [features, setFeatures] = useState([]);
  const [titleFeature, setTitleFeature] = useState("");
  const [featureItem, setFeatureItem] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  const createProductForm = useFormik({
    initialValues: {
      name: "",
    },

    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
      createProduct(values);
    },

    validate: (values) => {
      // const errors: Partial<MyFormValues> = {};
      const errors = {};
      if (!values.name) {
        errors.name = "name is required";
      }
      return errors;
    },
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  //   create product function
  const createProduct = async (values) => {
    const { name } = values;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", img);
    formData.append("description", data);
    formData.append("features",JSON.stringify(features));

    console.log("data ->", data);

    await fetch(`/${locale}/api/p-admin/products`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log("res -> ", res);

        // if (res.status === 201) {
        //     swal({
        //         title: "Nice",
        //         text:"create user successfully",
        //         icon: "success",
        //       })
        // }
        // else if(res.status === 500){
        //     swal({
        //         title: "ohh!",
        //         text:" Unknown Internal Server Error ",
        //         icon: "warning",
        //         dangerMode: true,
        //       })
        // }
        // else if(res.status === 422){
        //     swal({
        //         title: "ohh!",
        //         text:" This User alredy Existed ",
        //         icon: "warning",
        //         dangerMode: true,
        //       })
        // }
      })
      .catch((err) => {
        console.log("fetch data error ->", err);
      });
  };

  const uploadImage = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  useEffect(() => {
    setFeatureItem("");
    setTitleFeature("");
  }, [features]);

  const addFeatureFunc = (event) => {
    event.preventDefault();
    if (!titleFeature.trim() || !featureItem.trim()) {
      alert("لطفا مقادیر مناسب تعیین کنید");
    }

    const feture = {
      title: titleFeature,
      feature: featureItem,
    };
    setFeatures((prevState) => [...prevState, feture]);
  };

  return (
    <div className="">
      {/* create products */}
      <div className=" text-center text-4xl font-medium py-2">
        <p> ایجاد محصول </p>
      </div>
      <div className="flex flex-col items-start justify-center mt-10 p-5">
        <form
          onSubmit={createProductForm.handleSubmit}
          className={styles.form__createProduct}
        >
          {/* fullname   Field */}
          <div>
            <label htmlFor="name" className="text-sm">
              {" "}
              نام محصول{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={createProductForm.values.name}
              placeholder=" نام محصول   "
              onChange={createProductForm.handleChange}
              onBlur={createProductForm.handleBlur}
            />
            {createProductForm.touched.name && createProductForm.errors.name ? (
              <div className="text-xs text-primary">
                {createProductForm.errors.name}
              </div>
            ) : null}
          </div>
          {/* description Field */}
          <div>
            <p> توضیحات </p>
            <CKeditor
              name="description"
              onChange={(data) => {
                setData(data);
              }}
              editorLoaded={editorLoaded}
            />
            {JSON.stringify(data)}
          </div>
          {/* <div>
            <label htmlFor="description"> توضیحات </label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={5}
              value={createProductForm.values.description}
              onChange={createProductForm.handleChange}
              onBlur={createProductForm.handleBlur}
              placeholder=" توضیحات محصول "
            ></textarea>
            {createProductForm.touched.description &&
            createProductForm.errors.description ? (
              <div className="text-xs text-primary">
                {createProductForm.errors.description}
              </div>
            ) : null}
          </div> */}
          {/* image Field */}
          <div>
            <label htmlFor="image"> عکس محصول </label>
            <input type="file" onChange={uploadImage} />
          </div>

          {/* add feature */}
          <section className="grid grid-cols-3 items-center justify-start my-5">
            {/* title   Field */}
            <div>
              <input
                type="text"
                id="title"
                name="title"
                value={titleFeature}
                placeholder=" عنوان "
                onChange={(e) => setTitleFeature(e.target.value)}
                className="px-3"
              />
            </div>
            {/* ّfeature Field */}
            <div>
              <input
                name="feature"
                id="feature"
                value={featureItem}
                onChange={(e) => setFeatureItem(e.target.value)}
                className="px-3"
                placeholder=" ویزگی "
              ></input>
            </div>
            {/* add feature btn */}
            <button onClick={addFeatureFunc} className={styles.addFeatureBtn}>
              افزودن ویزگی
            </button>

            <div className=" col-span-3 w-full">
              <table className={styles.tableFeature}>
                <thead>
                  <tr className="grid grid-cols-2 bg-black text-white rounded">
                    <th> شرح </th>
                    <th> مقدار </th>
                  </tr>
                </thead>

                <tbody>
                  {features.map((feature) => (
                    <tr className="grid grid-cols-2">
                      <td>{feature.title}</td>
                      <td>{feature.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            className={styles.addProductBtn}
            disabled={createProductForm.isSubmitting}
          >
            ایجاد محصول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
