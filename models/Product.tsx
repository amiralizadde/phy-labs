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
      }
    },
  ],
});

const Productmodel =mongoose.models.product || mongoose.model("product", schema);

export default Productmodel;