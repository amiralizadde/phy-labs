import connectToDB from "@/configs/db";
import path from "path";
import { writeFile } from "fs/promises"
import NewsModel from '../../../../../../models/News'


export async function POST(req) {
    try {
      connectToDB();
      const formData = await req.formData();
      const title = formData.get("title");
      const shortTitle = formData.get("shortTitle");
      const description = formData.get("description");
      const img = formData.get("image");


      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/news/" + filename);
  
      await writeFile(imgPath, buffer);
  
      const news = await NewsModel.create({
        shortTitle,
        title,
        description,
        image: `/uploads/products/${filename}`,
      });

      return Response.json(
        { message: "Product created successfully :))", data: news  },
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