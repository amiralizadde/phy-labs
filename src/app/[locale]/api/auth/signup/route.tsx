import connectToDB from "@/configs/db";
import Usermodel from "../../../../../../models/User";
import { generateToken, hashPassword } from "@/utils/utils";
import { userType } from "@/types/authTypes";

export async function POST(req: Request) {
  
  
  try {
    connectToDB();
    const body = await req.json();
    const { fullname, email, password } = body;

    // validations
    if (!fullname.trim() || !email.trim() || !password.trim()) {
      return Response.json(
        { message: "Data is not valid !..." },
        { status: 422 }
      );
    }

    // isUserExist
    const isUserExist = await Usermodel.findOne({ email });
    if (isUserExist) {
      return Response.json(
        { message: "This userName is already Exist ..." },
        { status: 422 }
      );
    }

    // hash password
    const hashedpassword = await hashPassword(password);

    // generate token
    const token =await generateToken({ email });

    const users: userType[] = await Usermodel.find({});
    await Usermodel.create({
      fullname,
      email,
      password: hashedpassword,
      role: users?.length > 0 ? "USER" : "ADMIN",
    });

    return Response.json({ message: "Create user Successfully ..." },{ status: 201 ,headers: { 'Set-Cookie': `token=${token}`}})
  } catch (error) {
    return Response.json({message: "Unknown Internal Server Error ..." , error},{status:500});
  }
}
