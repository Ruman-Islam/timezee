import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: Array, required: true },
    price: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    brand: { type: String, required: true },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true },
    specification: { type: Array, required: true },
    model: { type: String, require: true },
    sellCount: { type: Number, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    reviews: { type: Array },
    productViews: { type: Number, default: 0 },
    sku: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Using to update the featured criteria
productSchema.pre("updateOne", async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  if (docToUpdate.productViews >= 10 && docToUpdate.rating >= 4) {
    this.set({ isFeatured: true });
  }
});

const Product =
  mongoose?.models?.Product || mongoose?.model("Product", productSchema);
export default Product;







// {
//   name: "ADJUSTABLE AC TO DC 3V-24V 3A UNIVERSAL ADAPTER WITH DISPLAY SCREEN VOLTAGE ADJUSTABLE POWER SUPPLY ADAPTER",
//   category: "accessories",
//   images: [
//     "https://i.ibb.co/2cC3npS/1.webp",
//     "https://i.ibb.co/dBwH0sh/2.webp",
//     "https://i.ibb.co/FqBbzJs/3.webp",
//   ],
//   price: 599,
//   sellPrice: 599,
//   brand: "samsung",
//   model: "3231",
//   sku: "45000--5-",
//   countInStock: 20,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
//   specification: [
//     "Name: Adjustable Power Adapter",
//     "Color: Mainly black",
//     "Input: AC100-240V 50/60Hz",
//     "Output: DC 3-24V adjustable",
//     "Current Capacity: 12A/60s",
//     "Output Current: 3A",
//     "Total cable length: 200cm",
//     "Efficiency: 95%",
//     "Size: 118*50*31mm",
//   ],
// },
// {
//   name: "POWER SUPPLY CABLE FOR MAIN PLUG FULL COPPER SS 145/A 13A 250V",
//   category: "accessories",
//   images: [
//     "https://i.ibb.co/7R9qGxb/1.jpg",
//     "https://i.ibb.co/s9yjjKd/2.jpg",
//   ],
//   price: 209,
//   sellPrice: 209,
//   brand: "lg",
//   model: "1551",
//   sku: "15000-11-W-04",
//   countInStock: 20,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
//   specification: [
//     "Singapore fused 3 pin plug",
//     "KV:13A",
//     "Max Efficiency: 250V",
//     "Max Efficiency Current: 3 poles, 3 wires",
//     "Current Capacity: 0.75mm through 1.5mm",
//     "No Load Current @ 10V: 0.5A",
//     "No. Of Cells: 2-3 Li-Poly",
//     "Motor Dimensions: 27.5 x 30mm",
//     "Shaft Diameter: 3.17mm",
//     "Weight: 47g - 4",
//   ],
// },
// {
//   name: "FLYSKY FS I6X 10CH 2.4GHZ AFHDS RC TRANSMITTER WITH FS-IA10B 10CH RECEIVER",
//   category: "drones & rc",
//   images: [
//     "https://i.ibb.co/DfHRQzs/1.webp",
//     "https://i.ibb.co/QkTmgtc/2.webp",
//     "https://i.ibb.co/HpNd0By/3.webp",
//   ],
//   price: 250,
//   sellPrice: 250,
//   brand: "flysky",
//   model: "4384",
//   sku: "65000-0-R/4",
//   countInStock: 20,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
//   specification: [
//     "Brand Name: FlySky",
//     "Item: FS-i6X RC Transmitter",
//     "Channel: 6-10 (Default 6)",
//     "Model Type: Fixed-Wing/Glider/Helicopter",
//     "RF Range: 2.408-2.475GHz",
//     "RF Power: <20dBm",
//     "RF Channel: 135",
//     "Bandwidth: 500KHz",
//     "2.4GHz System: AFHDS 2A/AFDHS",
//     "Modulation Type: GFSK",
//     "Stick Resolution 4096",
//     "Low Voltage Warning: <4.2V",
//     "DSC port: PS/2 Port PPM",
//     "Chargeable: No",
//     "Antenna Length: 26mm (Dual Antenna)",
//     "Weight: 392g",
//     "Power: 6V DC 1.5AA*4",
//     "Display: STNTransflective Display, LCD 128x64 Lattice, VA 73x39mm, LCD with white backlight",
//     "Size: 174x89x190mm",
//     "On-line Update: Yes",
//     "Color: Black",
//     "Certificate: CE0678, FCC ID: N4ZFLYSKYI6X",
//     "Model: model 2(left hand throttle)",
//   ],
// },
// {
//   name: "FLYSKY 2.4G 6CH FS-IA6B RECEIVER PPM OUTPUT WITH IBUS PORT",
//   category: "drones & rc",
//   images: [
//     "https://i.ibb.co/TmTvWBJ/1.webp",
//     "https://i.ibb.co/NsgqCB4/2.webp",
//     "https://i.ibb.co/NVkMdrz/3.webp",
//   ],
//   price: 250,
//   sellPrice: 250,
//   brand: "flysky",
//   model: "3916",
//   sku: "14000-2-",
//   countInStock: 20,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
//   specification: [
//     "Brand Name: FlySky",
//     "Item Name: FS-iA6B",
//     "Channel: 6",
//     "Frequency Range: 2.4055--2.475GHZ",
//     "Band Width Number: 140",
//     "Transmitting Power: ≤ 20dBm",
//     "RF Receiver Sensitivity: -105dbm",
//     "2.4G Mode: The second generation of an enhanced version of the automatic FM digital system",
//     "Encoding: GFSK",
//     "Antenna Length: 26mm * 2 (dual antenna)",
//     "Input Power: 4.0-6.5V DC",
//     "Dimension: 47 x 26.2 x 15mm",
//     "Weight: 14.9g",
//     "Color: Black",
//     "i-Bus Interface: Yes",
//     "Data Acquisition Interface: Yes",
//     "Model Type: Airplane / Gliders / Helicopter",
//     "Compatible Transmitter: Compatible with FS-i4,FS-i6,FS-i10,FS-GT2E,FS-GT2G",
//   ],
// },


// {
//   name: "1.5M DIGITAL OPTICAL AUDIO OPTIC FIBER CABLE",
//   category: "accessories",
//   images: [
//     "https://i.ibb.co/PGRWZsY/1.webp",
// "https://i.ibb.co/xzyXCTt/2.webp",
// "https://i.ibb.co/nfkCcZ8/3.webp"
//   ],
//   price: 250,
//   sellPrice: 250,
//   brand: "microlab",
//   model: "3204",
//   sku: "10000-1-W-02",
//   countInStock: 20,
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
//   specification: [
//     "Mode: Wester A2212",
//     "KV:1000",
//     "Max Efficiency: 80%",
//     "Max Efficiency Current: 4-10A (>75%)",
//     "Current Capacity: 12A/60s",
//     "No Load Current @ 10V: 0.5A",
//     "No. Of Cells: 2-3 Li-Poly",
//     "Motor Dimensions: 27.5 x 30mm",
//     "Shaft Diameter: 3.17mm",
//     "Weight: 47g - 4",
//   ],
// },