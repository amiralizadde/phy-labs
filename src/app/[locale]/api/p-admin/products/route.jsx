import connectToDB from "@/configs/db";
import path from "path";
import { writeFile } from "fs/promises"
import Productmodel from "../../../../../../models/Product";


export async function POST(req) {
    try {
      connectToDB();
      const formData = await req.formData();
      const name = formData.get("name");
      const description = formData.get("description");
      const features = formData.get("features");
      const img = formData.get("image");

      console.log('features->',features);
      console.log('description->',description);

      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/products/" + filename);
  
      await writeFile(imgPath, buffer);
  
      const product = await Productmodel.create({
        name,
        description,
        features:JSON.parse(features),
        image: `http://localhost:3000/uploads/products/${filename}`,
      });
      console.log('product =>',product);
      return Response.json(
        { message: "Product created successfully :))", data: product  },
        { status: 201 }
      );
    } catch (err) {
      return Response.json({ message: err }, { status: 500 });
    }
  }
  
  // Image Uploader
  export async function PUT(req) {
    const formData = await req.formData();
    const img = formData.get("img");
  
    // Validation
    if (!img) {
      return Response.json(
        { message: "Product has not image !!" },
        { status: 400 }
      );
    }
  
    try {
      const buffer = Buffer.from(await img?.arrayBuffer());
      const filename = Date.now() + img?.name;
  
      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer
      );
  
      // ✅
      return Response.json(
        { message: "File uploaded successfully :))" },
        { status: 201 }
      );
    } catch (err) {
      console.log(err);
      return Response.json({ message: err?.message }, { status: 500 });
    }
  } 