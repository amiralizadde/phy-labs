import connectToDB from "@/configs/db";
import Productmodel from "../../../../../../models/Product";

export async function DELETE(request: Request) {
  try {
    connectToDB();
    const { locale, productID, headlineID } = await request.json();

    if (locale === null || productID === null) {
      return Response.json(
        { message: "Please Enter Valid Data" },
        { status: 200 }
      );
    }
    
    const headline = await Productmodel.findOne({ _id: headlineID, locale });

   
    

    const isHasProduct = headline.products.some((product: any) => {
      return String(product._id) === productID;
    });

    // Not Found
    if (!isHasProduct) {
      return Response.json(
        { message: "Can't find this product" },
        { status: 404 }
      );  
    } 
    // delete and update products
    else if (isHasProduct) {
      const updateProductsHeadline = headline.products.filter(
        (product: any) => {
          return String(product._id) !== productID;
        }
      );

      const updatedHeadline = await Productmodel.findOneAndUpdate(
        { _id: headlineID, locale }, // شرط جستجو
        { $set: { products: updateProductsHeadline } }, // مقادیر به‌روزرسانی شده
        { new: true } // برای دریافت مقدار جدید پس از به‌روزرسانی
      );

    }

    return Response.json(
      { message: "Delete Product Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error", error },
      { status: 500 }
    );
  }
}
