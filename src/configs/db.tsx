import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect("mongodb://localhost:27017/phy-labs");
      console.log("connect to db successfully");
    }
  } catch (error) {
    console.log(" db connection has error ", error);
  }
};

export default connectToDB;
