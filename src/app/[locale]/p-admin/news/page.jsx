"use client";
import React, { useEffect, useState } from "react";
import CKeditor from "@/components/template/editor/Editor";
import { useLocale } from "next-intl";
import DataPickerComponent from "@/components/module/data-picker/DataPicker";

const CreateNews = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});
  const [valueDate, setValueDate] = useState(new Date());

  const locale = useLocale();

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    console.log("valueDate", valueDate.toLocaleDateString('en-CA',{
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }));
  }, [valueDate]);

  const changeDateHandler = (event) =>{

    const date = new Date(event)
    setValueDate(date)

  }

  const createNews = async (event) => {
    event.preventDefault();
    const newsForm = new FormData();

    newsForm.append("description", data);
    newsForm.append("title", title);
    newsForm.append("shortTitle", shortTitle);
    newsForm.append("image", image);

    await fetch(`/${locale}/api/p-admin/news`, {
      method: "POST",
      body: newsForm,
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

  return (
    <div className="bg-primary2 p-5 min-h-screen">
      <p className="text-center text-4xl"> درج خبر </p>
      <div>
        <input
          type="text"
          value={shortTitle}
          onChange={(e) => setShortTitle(e.target.value)}
          className="py-1 w-full px-2 outline-none my-2"
          placeholder="عنوان کوتاه  خبر"
        />
      </div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="py-1 w-full px-2 outline-none my-2"
          placeholder="عنوان خبر"
        />
      </div>
      <div className="my-2">
        <DataPickerComponent value={valueDate} changeDateHandler={changeDateHandler} />
      </div>
      <div>
        <CKeditor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />
        {JSON.stringify(data)}
      </div>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>

      <div>
        <button
          onClick={createNews}
          className=" py-1 px-5 bg-green-600 my-3 rounded text-white"
        >
          درج خبر
        </button>
      </div>
    </div>
  );
};

export default CreateNews;
