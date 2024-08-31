import mongoose from "mongoose";
import dotenv from "dotenv";
import categoryModel from "../../models/Category";
import Productmodel from "../../models/Product";

dotenv.config();

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      const dbUri = "mongodb://localhost:27017/phy-labs";
      // const dbUri = process.env.MONGODB_URI;
      if (!dbUri) {
        throw new Error("MONGODB_URI is not defined");
      }
      await mongoose.connect(dbUri);
      console.log("Connected to DB successfully");
    }
  } catch (error) {
    console.error("DB connection error", error);
  }
};

export default connectToDB;

const categories = [
  { name: "Electronics" },
  { name: "Books" },
  { name: "Clothing" },
];

const products = [
  {
    locale:"en",
    headline: "Profilometer",
    products: [
      {
        name: "Micro Profilometer",
        URL:"micro_profilometer"
      },
      {
        name: "Nano Profilometer",
        URL:"nano_profilometer"
      },
    ],
  },
  {
    locale:"en",
    headline:"TBM",
    products: [
      {
        name: "Tbm",
        URL:"tbm"
      },
    ]
  },
  {
    locale:"en",
    headline:"Spectrometer",
    products: [
      {
        name: "Spectrometer",
        URL:"spectrometer"
      },
      {
        name: "Spectro Nano Meter",
        URL:"spectro_nano_meter"
      },
    ],
  },
  {
    locale:"en",
    headline:"Opto Mechanics",
    products: [
      {
        name: "item1",
        URL:""
      },
      {
        name: "item2",
        URL:""
      },
      {
        name: "item3",
        URL:""
      },
      {
        name: "item4",
        URL:""
      },
      {
        name: "item5",
        URL:""
      },
      {
        name: "item6",
        URL:""
      },
      {
        name: "item7",
        URL:""
      },
      {
        name: "item8",
        URL:""
      },
      {
        name: "item9",
        URL:""
      },
      {
        name: "item10",
        URL:""
      },
      {
        name: "item11",
        URL:""
      },
      {
        name: "item12",
        URL:""
      },
      {
        name: "item13",
        URL:""
      },
      {
        name: "item14",
        URL:""
      },
      {
        name: "item15",
        URL:""
      },
      {
        name: "item16",
        URL:""
      },
      {
        name: "item17",
        URL:""
      },
      {
        name: "item18",
        URL:""
      },
      {
        name: "item19",
        URL:""
      },
      {
        name: "item20",
        URL:""
      },
      {
        name: "item21",
        URL:""
      },
      {
        name: "item22",
        URL:""
      },
      {
        name: "item23",
        URL:""
      },
      {
        name: "item24",
        URL:""
      },
      {
        name: "item25",
        URL:""
      },
      {
        name: "item26",
        URL:""
      },
      {
        name: "item27",
        URL:""
      },
      {
        name: "item28",
        URL:""
      },
      {
        name: "item29",
        URL:""
      },
      {
        name: "item30",
        URL:""
      },

      {
        name: "item31",
        URL:""
      },
      {
        name: "item32",
        URL:""
      },
    ],
  }
];

async function seedCategories() {
  try {
    // const existingCategories = await categoryModel.find({});
    const existingProducts = await Productmodel.find({})
    if (existingProducts.length === 0) {
      // await categoryModel.insertMany(categories);
      await Productmodel.insertMany(products);
      console.log("Products seeded successfully");
    } else {
      console.log("Products already exist, no seeding required.");
    }
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding Products:", error);
    mongoose.connection.close();
  }
}

// seedCategories();

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
