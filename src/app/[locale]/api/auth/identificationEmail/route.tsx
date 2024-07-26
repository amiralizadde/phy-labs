import connectToDB from "@/configs/db";
import Usermodel from "../../../../../../models/User";

export async function POST(req: Request) {

    try {
        connectToDB();
        const email = await req.json();
        
        // isHasUser
        const isHasUser = await Usermodel.findOne({email})
        console.log('isHasUser ->' ,isHasUser);

        if (isHasUser) {
            return Response.json({message:"Email is true"},{status:200})
        }else if(!isHasUser){
            return Response.json({message:"User not found "},{status:404})
        }
        
    } catch (error) {
        return Response.json({message:"Unknown Internal Server Error"},{status:500})
    }
    

}