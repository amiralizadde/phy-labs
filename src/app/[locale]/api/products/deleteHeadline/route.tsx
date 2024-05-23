import Productmodel from "../../../../../../models/Product";
import connectToDB from "@/configs/db";

export async function DELETE(request: Request) {
  try {
    connectToDB();
    const body = await request.json();

    const { headlineID, locale } = body;

    if (headlineID === null || locale === null) {
      return Response.json({ message: "Enter valid data" }, { status: 422 });
    }

    const headline = await Productmodel.findOne({ _id: headlineID, locale });

    if (headline === null) {
      return Response.json(
        { message: "Cant find this headline" },
        { status: 422 }
      );
    }

    // // delete category
    await Productmodel.findByIdAndDelete(headline._id);
    return new Response(
      JSON.stringify({ message: "Category deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Unknown Internal Server Error", error },
      { status: 500 }
    );
  }
}
