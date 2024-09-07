import mongoose from "mongoose";

const schema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"USER",
    },
    refreshToken: String

})

const Usermodel =mongoose.models.User || mongoose.model('User',schema)

export default Usermodel