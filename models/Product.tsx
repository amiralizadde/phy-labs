import mongoose from "mongoose";

const schema = new mongoose.Schema({
  locale: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      URL: {
        type: String,
      },
      fullName: {
        type: String,
      },
      rate: {
        type: String,
      },
      description: {
        type: String,
      },
      features: [
        {
          feature: {
            type: String,
          },
        },
      ],
      price:{
        type: String,
      }
    },
  ],
});

const Productmodel =
  mongoose.models.product || mongoose.model("product", schema);

export default Productmodel;
