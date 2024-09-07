import connectToDB from "@/configs/db";
import Usermodel from "../../../../../../models/User";
import { generateToken, verifyPassword } from "@/utils/utils";

export async function POST(req: Request) {
  try {
    connectToDB();
    const body = await req.json();

    const { email, password } = body;

    //  validations
    if (!email.trim() || !password.trim()) {
      return Response.json({ message: "Enter valid data" }, { status: 422 });
    }
    // find user
    const user = await Usermodel.findOne({ email });

    if (!user) {
      return Response.json({ message: "This User not found" }, { status: 404 });
    }

    // verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return Response.json(
        { message: "email or password not valid" },
        { status: 422 }
      );
    }

    const token =await generateToken({ email: user.email });

    //refresh token

    return Response.json(
      { message: "User loggedIn Successfully ..." },
      { status: 200, headers: { "Set-Cookie": `token=${token};path=/;httpOnly=true` } }
    );
    
  } catch (error) {
    return Response.json({ message: "Unknown Internal Server Error" });
  }
}
