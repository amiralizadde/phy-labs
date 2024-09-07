import connectToDB from "@/configs/db";
import Productmodel from "../../../../../../models/Product";

export async function POST(request: Request) {
  try {
    connectToDB();
    const body = await request.json();
    const product = await Productmodel.findOne(
      { products: { $elemMatch: { URL: body.params.productName } } },
      { "products.$": 1 }
    );

    return Response.json({ message: "successfully",data:product }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error ...", error },
      { status: 500 }
    );
  }
}
