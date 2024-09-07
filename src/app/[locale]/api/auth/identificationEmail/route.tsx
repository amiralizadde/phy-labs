import connectToDB from "@/configs/db";
import Usermodel from "../../../../../../models/User";
import { validateEmail } from "@/utils/utils";

export async function POST(req: Request) {
  try {
    connectToDB();
    const { email } = await req.json();

    //validate
    let isValidEmail = validateEmail(email);

    if (isValidEmail === false) {
      return Response.json({ message: "Email is not valid" }, { status: 400 });
    }

    // isHasUser
    const isHasUser = await Usermodel.findOne({ email });

    if (isHasUser) {
      return Response.json({ message: "Email is true" }, { status: 200 });
    } else if (Boolean(isHasUser) === false) {
      return Response.json({ message: "User not found " }, { status: 404 });
    }
  } catch (error) {
    console.log("err -> ", error);

    return Response.json(
      { message: "Unknown Internal Server Error" },
      { status: 500 }
    );
  }
}
