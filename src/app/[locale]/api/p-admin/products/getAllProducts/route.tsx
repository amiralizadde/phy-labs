import connectToDB from "@/configs/db";
import Productmodel from "../../../../../../../models/Product";

export async function GET(req: Request) {
  try {
    connectToDB();
    const allProducts = await Productmodel.find({});

    return Response.json(
      { message: "success", data: allProducts },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "Unknown Internal Server Error" },
      { status: 500 }
    );
  }
}
