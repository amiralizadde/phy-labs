import mongoose from "mongoose";

const schema = new mongoose.Schema({

    shortTitle:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: {
        type: String,
        required: true,
    },
})

const NewsModel =mongoose.models.New || mongoose.model('New',schema)

export default NewsModel