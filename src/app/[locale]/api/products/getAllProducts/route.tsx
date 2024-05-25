import connectToDB from "@/configs/db";
import Productmodel from "../../../../../../models/Product";

export async function POST(request: Request) {
  try {
    connectToDB();
    const locale = await request.json();

    const allProducts = await Productmodel.find({ locale });

    return Response.json({ body: allProducts }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error ...", error },
      { status: 500 }
    );
  }
}
