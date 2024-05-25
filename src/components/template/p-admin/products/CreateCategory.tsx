"use client"
import { useLocale } from "next-intl";
import { useState } from "react";

const CreateCategory = () => {
    const [headline, setHeadline] = useState("");
    const locale = useLocale();

    const CreateHeadline = async (event:any) => {
        event.preventDefault()
        const data = {
          locale,
          headline,
        };
        await fetch(`/${locale}/api/products/createHeadline`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.status === 201) {
            setHeadline('')
            alert('Create category Successfully ...')
          }
        }).catch(err=>{
            alert('Please try after a few minutes...')
        })
      };
      
  return (
    <form className="grid grid-cols-3 px-2">
    <input
      type="text"
      value={headline}
      onChange={(e) => setHeadline(e.target.value)}
      className="col-span-2 outline-none px-3"
    />
    <div className="flex items-center justify-center">
      <button type="submit" onClick={CreateHeadline} className="
        bg-green-600 ms-2 py-1 px-4 text-sm text-white rounded-sm cursor-pointer">
        Add Category
      </button>
    </div>
  </form>
  )
}

export default CreateCategory