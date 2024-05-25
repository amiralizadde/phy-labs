import connectToDB from "@/configs/db";
import path from "path";
import { writeFile } from "fs/promises";
import Productmodel from "../../../../../../models/Product";

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { locale, headline } = body;

    console.log('locale ->' ,locale);
    console.log('headline ->' ,headline);
    

    if (!locale.trim() || !headline.trim()) {
      return Response.json({ message: "Enter valid data" }, { status: 422 });
    }

    // IsExist Headline
    const isHeadline = await Productmodel.findOne({ locale, headline });

   
    if (Boolean(isHeadline) === true) {
     return  Response.json({ message: "This Headline is already existed" },{ status: 422 }); 
    }
    

    

    await Productmodel.create({
      locale,
      headline,
      products:[]
    });

    return Response.json(
      { message: "Create Headline Successfully" },
      { status: 201 }
    );

    // const features = formData.get("features");
    // const description = formData.get("description");
    // const name = formData.get("name");
    // const image = formData.get("image");

    // const buffer = Buffer.from(await image?.arrayBuffer());
    // const filename = Date.now() + image?.name;
    // const imgPath = path.join(
    //   process.cwd(),
    //   "public/uploads/products/" + filename
    // );

    // await writeFile(imgPath, buffer);

    // const newProduct = {
    //   name,
    //   description,
    //   features: [
    //     { title: "Model:", feature: "KCM-A-01" },
    //     { title: "Weight::", feature: "110 grams" },
    //     { title: "Material:::", feature: "Aluminum 7000" },
    //   ],
    //   image: `/uploads/products/${filename}`,
    // };

    // const isHeadline = await NewProductmodel.findOne({ headline, locale });

    // if (!isHeadline) {
    //   let products = [];
    //   products.push(newProduct);

    //    await NewProductmodel.create({
    //     locale,
    //     headline,
    //     products,
    //   });
    // } else if (isHeadline) {
    //   const product = await NewProductmodel.findById(isHeadline._id);
    //   product.products.push(newProduct);
    //   await product.save();

    // }

    // return Response.json(
    //   { message: "Create Product Successfully" },
    //   { status: 200 }
    // );
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error", error },
      { status: 500 }
    );
  }
}
