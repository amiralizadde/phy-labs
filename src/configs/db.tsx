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

const products = [
  {
    locale: "en",
    headline: "Profilometer",
    products: [
      {
        name: "Micro Profilometer",
        URL: "micro_profilometer",
      },
      {
        name: "Nano Profilometer",
        URL: "nano_profilometer",
      },
    ],
  },
  {
    locale: "en",
    headline: "TBM",
    products: [
      {
        name: "Tbm",
        URL: "tbm",
      },
    ],
  },
  {
    locale: "en",
    headline: "Spectrometer",
    products: [
      {
        name: "Spectrometer",
        URL: "spectrometer",
      },
      {
        name: "Spectro Nano Meter",
        URL: "spectro_nano_meter",
      },
    ],
  },
  {
    locale: "en",
    headline: "Opto Mechanics",
    products: [
      {
        name: "item1",
        URL: "nameItm1",
        fullName:
          "10 mm thick aluminum optical board with hard anodized coating",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [],
        price: 5000,
      },
      {
        name: "item2",
        URL: "nameItm2",
        fullName:
          "Optical table 900*1200 with steel top and 4 mm steel base with thickness of 80 along with table with portable wheels",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [],
        price: 5000,
      },
      {
        name: "item3",
        URL: "nameItm3",
        fullName:
          "Manual translation stage with 25 mm travel course ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item4",
        URL: "nameItm4",
        fullName:
          "XYZ-Manual translation stage micrometer with 25 mm travel course ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item5",
        URL: "nameItm5",
        fullName:
          "Motorized translation stage with 0.01 mm accuracy of customized course with exclusive software",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item6",
        URL: "nameItm6",
        fullName:
          "Laboratory jack with variable high load 75 to 125 mm",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item7",
        URL: "nameItm7",
        fullName:
          "Manual vertical translation stage with 25 mm travel course",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item8",
        URL: "nameItm8",
        fullName:
          "Simple (lens) circular1/2 inch optical holder ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item9",
         URL: "nameItm9",
        fullName:
          "Simple circular 1 inch optical holder",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item10",
         URL: "nameItm10",
        fullName:
          "Simple circular 2 inch optical holder ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item11",
         URL: "nameItm11",
        fullName:
          "2 -axis 1 inch rotational optical holder with 5 milliradians accuracy ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item12",
         URL: "nameItm12",
        fullName:
          "2 -axis 2 inch optical holder with 5 milliradians accuracy ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item13",
         URL: "nameItm13",
        fullName:
          "Universal optical holder 10 mm to 75 mm ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item14",
         URL: "nameItm14",
        fullName:
          "filter holder and 100 mm display sheet ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item15",
         URL: "nameItm15",
        fullName:
          "objective RMS holder - m25-m26 ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item16",
         URL: "nameItm16",
        fullName:
          "Laser tube holder from 10 to 50 mm in diameter",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item17",
         URL: "nameItm17",
        fullName:
          " Spatial filter with 10× objective and 25 micron pinhole ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item18",
         URL: "nameItm18",
        fullName:
          "Beam expander with 5 and 10 times magnification ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item19",
         URL: "nameItm19",
        fullName:
          "C-mount extension kit 10-piece ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item20",
         URL: "nameItm20",
        fullName:
          "1 inch slit kit of 10 pieces",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item21",
         URL: "nameItm21",
        fullName:
          "1 inch pinhole kit, 10 pieces ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item22",
         URL: "nameItm22",
        fullName:
          "30 mm post holder with 12 diameter hard chrome rod and M4 thread ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item23",
         URL: "nameItm23",
        fullName:
          "50 mm post holder with 12 diameter hard chrome rod and M4 thread ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item24",
         URL: "nameItm24",
        fullName:
          "75 mm post holder with 12 diameter hard chrome rod and M4 thread",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item25",
         URL: "nameItm25",
        fullName:
          "100 mm post holder with 12 diameter hard chrome rod and M4 thread ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item26",
         URL: "nameItm26",
        fullName:
          "45 degree rod holder ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item27",
         URL: "nameItm27",
        fullName:
          "90 degree rod holder ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item28",
         URL: "nameItm28",
        fullName:
          "75 mm long U post holder base ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item29",
         URL: "nameItm29",
        fullName:
          "75 mm long H post holder base ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item30",
         URL: "nameItm30",
        fullName:
          "Adjustable beam splitter holder ",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },

      {
        name: "item31",
         URL: "nameItm31",
        fullName:
          "2 -axis adjustable screen, dimensions 80×80, with 5 mrad accuracy",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
      {
        name: "item32",
         URL: "nameItm32",
        fullName:
          "5 axis 1 inch optical holder with 5 mrad accuracy",
        rate: "4.6 points (13 buyers' points)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias!",
        features: [
          {feature1:" ipsum dolo"},
          {feature2:" ipsum dolo"},
          {feature3:" ipsum dolo"},
          {feature4:" ipsum dolo"},
          {feature5:" ipsum dolo"},
          {feature6:" ipsum dolo"},
          {feature7:" ipsum dolo"},
        ],
        price: 5000,
      },
    ],
  },
];

async function seedCategories() {
  try {
    // const existingCategories = await categoryModel.find({});
    const existingProducts = await Productmodel.find({});
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
