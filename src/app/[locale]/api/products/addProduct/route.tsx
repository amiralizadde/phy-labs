import connectToDB from "@/configs/db";
import path from "path";
import { writeFile } from "fs/promises";
import Productmodel from "../../../../../../models/Product";

export async function POST(request: Request) {
  try {
    connectToDB();
    const formData = await request.formData();
    const locale = formData.get("locale");
    const headline = formData.get("headline");
    const features = formData.get("features");
    const description = formData.get("description");
    const name = formData.get("name");
    const image = formData.get("image");

    // بررسی و تایپ‌کستینگ فایل
    if (!(image instanceof File)) {
      throw new Error("Invalid data type for image");
    }
    const buffer = Buffer.from(await image?.arrayBuffer());
    const filename = Date.now() + image?.name;
    const imgPath = path.join(
      process.cwd(),
      "public/uploads/products/" + filename
    );

    await writeFile(imgPath, buffer);

   
    
    
    const newProduct = {
      name,
      description,
      features:JSON.parse(features),
      image: `/uploads/products/${filename}`,
    };

    console.log('newProduct ->' ,newProduct);
    

    if (headline === null) {
      return Response.json({ message: "Enter valid data" }, { status: 422 });
    }

    // بررسی و تایپ‌کستینگ
    if (typeof headline !== "string" || typeof locale !== "string") {
      throw new Error("Invalid data type for headline or features");
    }

    const Headline = await Productmodel.findOne({
      locale: locale,
      headline: headline,
    });

    console.log(' Headline ->' ,Headline);
    

    if (Boolean(Headline) === false) {
      return Response.json(
        { message: "This Headline cant find" },
        { status: 422 }
      );
    }

    if (Boolean(Headline) === true) {
      const category = await Productmodel.findById(Headline._id);
      category.products.push(newProduct);
      await category.save();
    }

    return Response.json({ message: "Add  Product Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error", error },
      { status: 500 }
    );
  }
}
