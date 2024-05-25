"use client";
import { productType } from "@/types/productTypes";
import { error } from "console";
import { useLocale } from "next-intl";
import Swal from "sweetalert2";

type categoryType ={
    _id:string
    headline:string
    locale:string
    products:productType[]
}

type CategoryItemprops = {
    category: categoryType;
    getAllCategory:()=>void
};


const CategoryItem = ({category,getAllCategory}:CategoryItemprops) => {
    const locale = useLocale()

const removeCategory=()=>{

    Swal.fire({
        title: "Are you sure?",
        text: "By removing the category, all related products will be removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        console.log('result ->' ,result);
        
        if (result.isConfirmed) {

            try {
                removeHandler()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                getAllCategory()
            } catch (error) {
                
            }
            
           
        }
        });

}

const removeHandler = async()=>{

    const data={
        locale , 
        headlineID:category._id
    }

    await fetch(`/${locale}/api/products/deleteHeadline`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res=>{
        if (res.status === 200) {
            console.log('res delete->',res);
        }else{
            throw new Error("error")
        }
    }).catch(err=>{
        console.log('err ->' ,err);
    })
}


  return (
      
        <li className=" px-2 rounded font-medium my-1 mx-2 bg-[#7070703d] py-1 text-sm  text-black flex items-center justify-between">
          <p className="ms-1">{category.headline}</p>
          <button className="bg-red-600 py-1 px-3 text-white text-xs" onClick={removeCategory}>
            Delete
          </button>
        </li> 
   
  );
};

export default CategoryItem;
