import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name:{
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
    features: [
        {
          title: {
            type: String,
            required: true,
          },
          feature: {
            type: String,
            required: true,
          },
        },
      ]

})

const Productmodel =mongoose.models.Product || mongoose.model('Product',schema)

export default Productmodel