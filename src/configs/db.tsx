import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      const dbUri = "mongodb://localhost:27017/phy-labs"
      // const dbUri = process.env.MONGODB_URI;
      if (!dbUri) {
        throw new Error('MONGODB_URI is not defined');
      }
      await mongoose.connect(dbUri);
      console.log('Connected to DB successfully');
    }
  } catch (error) {
    console.error('DB connection error', error);
  }
};

export default connectToDB;



// import mongoose from "mongoose";

// const connectToDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       return true;
//     } else {
//       await mongoose.connect("mongodb://localhost:27017/phy-labs");
//       console.log("connect to db successfully");
//     }
//   } catch (error) {
//     console.log(" db connection has error ", error);
//   }
// };

// export default connectToDB;
