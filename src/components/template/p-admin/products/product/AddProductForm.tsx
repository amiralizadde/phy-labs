"use client";
import CKeditor from "@/components/template/editor/Editor";
import { featureType, product } from "@/types/productTypes";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProductForm = () => {
  const locale = useLocale();
  const [allCategory, setAllCategory] = useState<product[] | null>(null);
  const [headline, setHeadline] = useState("-1");
  const [data, setData] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [dataLanguage, setDataLanguage] = useState<"en" | "fa">("en");
  const [img, setImg] = useState<File | null>(null);
  const [features, setFeatures] = useState<featureType[]>([]);
  const [titleFeature, setTitleFeature] = useState("");
  const [featureItem, setFeatureItem] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getAllCategory();
    setEditorLoaded(true);
  }, []);
  useEffect(() => {
    setTitleFeature("");
    setFeatureItem("");
  }, [features]);

  const getAllCategory = async () => {
    await fetch(`/${locale}/api/products/getAllProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locale),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data.body);
      });
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  const addFeatureFunc = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!titleFeature.trim() || !featureItem.trim()) {
      alert("لطفا مقادیر مناسب تعیین کنید");
    }

    const feture = {
      title: titleFeature,
      feature: featureItem,
    };
    setFeatures((prevState: any) => [...prevState, feture]);
  };

  const addProduct = async () => {
    try {
      if (Boolean(!headline) || Boolean(!data) || Boolean(!img)) {
        throw new Error();
      }
      console.log("1");

      const formData = new FormData();
      formData.append("locale", locale);
      formData.append("headline", headline);
      formData.append("name", name);
      formData.append("image", img!);
      formData.append("description", data);
      formData.append("features", JSON.stringify(features));

      await fetch(`/${locale}/api/products/addProduct`, {
        method: "POST",
        body: formData,
      }).then((res) => {
        console.log("res ->", res);
      });
    } catch (error) {
      Swal.fire({
        text: "error",
        timer: 2500,
      });
    }
  };

  return (
    <div className="grid grid-cols-8 gap-3 p-3 rounded bg-[#0201023d]">
      <select
        className=" col-span-4 outline-none p-2 rounded"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      >
        <option value="-1">Select Category</option>
        {allCategory?.map((category) => (
          <option value={category.headline}>{category.headline}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" col-span-4 p-2 rounded outline-none"
      />

      <select className="col-span-3  rounded outline-none px-2">
        <option value="fa">FA</option>
        <option value="en">EN</option>
      </select>

      <div className="flex items-center col-span-5 bg-white ">
        <label htmlFor="image" className="text-sm font-bold px-2 ">
          image product:
        </label>
        <input type="file" onChange={uploadImage} className="mx-2" />
      </div>

      <div className="col-span-8">
        <p className="font-bold"> Description </p>
        <CKeditor
          name="description"
          onChange={(data: any) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
          value={""}
        />
        {JSON.stringify(data)}
      </div>

      <section className="col-span-8  rounded items-center justify-start my-5 bg-[#0906094b]">
        <div className="grid grid-cols-5 gap-4 p-3">
          {/* title   Field */}
          <div className="col-span-2 ">
            <input
              type="text"
              id="title"
              name="title"
              value={titleFeature}
              placeholder=" title "
              onChange={(e) => setTitleFeature(e.target.value)}
              className="px-3 py-1 rounded outline-none w-full"
            />
          </div>
          {/* ّfeature Field */}
          <div className="col-span-2">
            <input
              name="feature"
              id="feature"
              value={featureItem}
              onChange={(e) => setFeatureItem(e.target.value)}
              className="px-3 py-1 rounded outline-none w-full"
              placeholder=" feature "
            ></input>
          </div>
          {/* add feature btn */}
          <button
            onClick={addFeatureFunc}
            className="bg-[#349441] py-1 text-white rounded"
          >
            Add Feature
          </button>
        </div>

        {features.length > 0 && (
          <div className="bg-[#0201023d] m-3">
            <table className="w-full">
              <thead className="">
                <tr className="grid grid-cols-2 child:items-start bg-white text-black   rounded ">
                  <th> title </th>
                  <th> feature </th>
                </tr>
              </thead>

              <tbody className="p-3">
                {features.map((feature) => (
                  <tr className="grid grid-cols-2 bg-[#7070703d]  child:text-white child:text-center">
                    <td>{feature.title}</td>
                    <td>{feature.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <button
        onClick={addProduct}
        className="bg-blue-800 col-span-2 py-2 font-medium text-white rounded"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
