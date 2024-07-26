import connectToDB from "@/configs/db";
import path from "path";
import { writeFile } from "fs/promises";
import Productmodel from "../../../../../../models/Product";

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const { locale, headline } = body;

    console.log("locale ->", locale);
    console.log("headline ->", headline);

    if (!locale.trim() || !headline.trim()) {
      return Response.json({ message: "Enter valid data" }, { status: 422 });
    }

    // IsExist Headline
    const isHeadline = await Productmodel.findOne({ locale, headline });

    if (Boolean(isHeadline) === true) {
      return Response.json(
        { message: "This Headline is already existed" },
        { status: 422 }
      );
    }

    await Productmodel.create({
      locale,
      headline,
      products: [],
    });

    return Response.json(
      { message: "Create Headline Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error", error },
      { status: 500 }
    );
  }
}
