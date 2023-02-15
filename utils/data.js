import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John Doe",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane Doe",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "DOUBLE CONTACTS, 5 CONTACTS SILVER CONTACTS AUTOMATIC RELAY",
      category: "electronic",
      images: [
        "https://i.ibb.co/tBqjvDJ/diy.webp",
        "https://i.ibb.co/F7BvpWz/2.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Nike",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      model: "2361",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
      reviews: [
        {
          name: "Md Nurullah",
          text: "Motor proyojon.....Helicopter toiri korbo....Pray 80 pis lagbe....Damta ektu komale valo hoto....",
          star: 5,
          date: "02/05/2019",
        },
      ],
    },
    {
      name: "NEO-8M HIGH PRECISION GPS MODULE",
      category: "electronic",
      images: [
        "https://i.ibb.co/cY6mwcD/2.webp",
        "https://i.ibb.co/xqWnnNm/11.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Nike",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      model: "2361",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
    },
    {
      name: "1000KV BRUSHLESS MOTOR A2212-13T",
      category: "electronic",
      images: [
        "https://i.ibb.co/mcthpPk/1.webp",
        "https://i.ibb.co/dtpYKct/11.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Nike",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      model: "2361",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
    },
    {
      name: "12VDC 100A HEAVY DUTY DOUBLE CONTACTS, 5 CONTACTS SILVER CONTACTS AUTOMATIC RELAY",
      category: "electronic",
      images: [
        "https://i.ibb.co/JdQ7vvW/SI5351-Clock-Signal-Generator-Module-Clock-Generator-Breakout-Board-0-600x600.webp",
        "https://i.ibb.co/0CRgrF0/SI5351-Clock-Signal-Generator-Module-Clock-Generator-Breakout-Board-600x600.webp",
      ],
      price: 550,
      sellPrice: 550,
      brand: "Nike",
      countInStock: 20,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      model: "2361",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
    },
    {
      name: "27.5MM PROTECTIVE POLYPROPYLENE FILM CAPACITOR AC 275V 2.2UF",
      category: "electronic",
      images: [
        "https://i.ibb.co/4NMX2dr/ff.webp",
        "https://i.ibb.co/f4tdYK1/1.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Nike",
      model: "2361",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
    },
    {
      name: "32-IN-1 MULTI-FUNCTIONAL SCREWDRIVER SET",
      category: "electronic",
      images: [
        "https://i.ibb.co/hmfWjwF/Automatic-PIR-Motion-Sensor-Detector-Switch-Automatic-PIR-Motion-Sensor-Detector-price-in-online-BD.webp",
        "https://i.ibb.co/v4hR2TW/Automatic-PIR-Motion-Sensor-Detector-Switch-Automatic-PIR-Motion-Sensor-Detector-price-in-online-BD.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Nike",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      model: "2361",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
      sku: "39000--3-W-37",
    },
    {
      name: "1.5M DIGITAL OPTICAL AUDIO OPTIC FIBER CABLE",
      category: "accessories",
      images: [
        "https://i.ibb.co/PGRWZsY/1.webp",
        "https://i.ibb.co/xzyXCTt/2.webp",
        "https://i.ibb.co/nfkCcZ8/3.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "microlab",
      model: "3204",
      sku: "10000-1-W-02",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Mode: Wester A2212",
        "KV:1000",
        "Max Efficiency: 80%",
        "Max Efficiency Current: 4-10A (>75%)",
        "Current Capacity: 12A/60s",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
    },
    {
      name: "ADJUSTABLE AC TO DC 3V-24V 3A UNIVERSAL ADAPTER WITH DISPLAY SCREEN VOLTAGE ADJUSTABLE POWER SUPPLY ADAPTER",
      category: "accessories",
      images: [
        "https://i.ibb.co/2cC3npS/1.webp",
        "https://i.ibb.co/dBwH0sh/2.webp",
        "https://i.ibb.co/FqBbzJs/3.webp",
      ],
      price: 599,
      sellPrice: 599,
      brand: "samsung",
      model: "3231",
      sku: "45000--5-",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Name: Adjustable Power Adapter",
        "Color: Mainly black",
        "Input: AC100-240V 50/60Hz",
        "Output: DC 3-24V adjustable",
        "Current Capacity: 12A/60s",
        "Output Current: 3A",
        "Total cable length: 200cm",
        "Efficiency: 95%",
        "Size: 118*50*31mm",
      ],
    },
    {
      name: "POWER SUPPLY CABLE FOR MAIN PLUG FULL COPPER SS 145/A 13A 250V",
      category: "accessories",
      images: [
        "https://i.ibb.co/7R9qGxb/1.jpg",
        "https://i.ibb.co/s9yjjKd/2.jpg",
      ],
      price: 209,
      sellPrice: 209,
      brand: "lg",
      model: "1551",
      sku: "15000-11-W-04",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Singapore fused 3 pin plug",
        "KV:13A",
        "Max Efficiency: 250V",
        "Max Efficiency Current: 3 poles, 3 wires",
        "Current Capacity: 0.75mm through 1.5mm",
        "No Load Current @ 10V: 0.5A",
        "No. Of Cells: 2-3 Li-Poly",
        "Motor Dimensions: 27.5 x 30mm",
        "Shaft Diameter: 3.17mm",
        "Weight: 47g - 4",
      ],
    },
    {
      name: "FLYSKY FS I6X 10CH 2.4GHZ AFHDS RC TRANSMITTER WITH FS-IA10B 10CH RECEIVER",
      category: "drones & rc hobby",
      images: [
        "https://i.ibb.co/DfHRQzs/1.webp",
        "https://i.ibb.co/QkTmgtc/2.webp",
        "https://i.ibb.co/HpNd0By/3.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "flysky",
      model: "4384",
      sku: "65000-0-R/4",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Brand Name: FlySky",
        "Item: FS-i6X RC Transmitter",
        "Channel: 6-10 (Default 6)",
        "Model Type: Fixed-Wing/Glider/Helicopter",
        "RF Range: 2.408-2.475GHz",
        "RF Power: <20dBm",
        "RF Channel: 135",
        "Bandwidth: 500KHz",
        "2.4GHz System: AFHDS 2A/AFDHS",
        "Modulation Type: GFSK",
        "Stick Resolution 4096",
        "Low Voltage Warning: <4.2V",
        "DSC port: PS/2 Port PPM",
        "Chargeable: No",
        "Antenna Length: 26mm (Dual Antenna)",
        "Weight: 392g",
        "Power: 6V DC 1.5AA*4",
        "Display: STNTransflective Display, LCD 128x64 Lattice, VA 73x39mm, LCD with white backlight",
        "Size: 174x89x190mm",
        "On-line Update: Yes",
        "Color: Black",
        "Certificate: CE0678, FCC ID: N4ZFLYSKYI6X",
        "Model: model 2(left hand throttle)",
      ],
    },
    {
      name: "FLYSKY 2.4G 6CH FS-IA6B RECEIVER PPM OUTPUT WITH IBUS PORT",
      category: "drones & rc hobby",
      images: [
        "https://i.ibb.co/TmTvWBJ/1.webp",
        "https://i.ibb.co/NsgqCB4/2.webp",
        "https://i.ibb.co/NVkMdrz/3.webp",
      ],
      price: 750,
      sellPrice: 750,
      brand: "flysky",
      model: "3916",
      sku: "14000-2-",
      countInStock: 20,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Brand Name: FlySky",
        "Item Name: FS-iA6B",
        "Channel: 6",
        "Frequency Range: 2.4055--2.475GHZ",
        "Band Width Number: 140",
        "Transmitting Power: ≤ 20dBm",
        "RF Receiver Sensitivity: -105dbm",
        "2.4G Mode: The second generation of an enhanced version of the automatic FM digital system",
        "Encoding: GFSK",
        "Antenna Length: 26mm * 2 (dual antenna)",
        "Input Power: 4.0-6.5V DC",
        "Dimension: 47 x 26.2 x 15mm",
        "Weight: 14.9g",
        "Color: Black",
        "i-Bus Interface: Yes",
        "Data Acquisition Interface: Yes",
        "Model Type: Airplane / Gliders / Helicopter",
        "Compatible Transmitter: Compatible with FS-i4,FS-i6,FS-i10,FS-GT2E,FS-GT2G",
      ],
    },
    {
      name: "ABS 3D PRINTER FILAMENTS 1.75MM 2.2LBS/1KG ABS FILAMENT ( COLOR - RANDOM)",
      category: "3d printers $ cnc",
      images: [
        "https://i.ibb.co/WDxxpP5/2.webp",
        "https://i.ibb.co/h2JFpP9/3.webp",
      ],
      price: 250,
      sellPrice: 250,
      brand: "Filament",
      model: "3822",
      sku: "14000-1-",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Material: ABS",
        "Type: Filament",
        "Diameter: 1.75mm",
        "Weight: 1KG",
        "Length : 330M",
        "Tolerance Level : ± 0.02MM",
        "Print Speed : 50 – 100 mm/s",
        "Print Temperature : 220-240℃ / （428-464℉）",
        "Base Plate Temperature : Heating Bed Temperature is from 80 to 120 Celsius",
        "Recommended Storage Temperature : -20 to 50 °C / -4 to 122 °F",
        "Colors: Random",
        "Includes: ABS filament material, color of your choice, 1kg spool (approximately 2.20 lbs)",
      ],
    },
    {
      name: "PLA 3D PRINTER FILAMENT 1.75MM 1KG/2.2LB (BLACK)",
      category: "3d printers $ cnc",
      images: [
        "https://i.ibb.co/n7DTQyx/1.jpg",
        "https://i.ibb.co/ZVJGt9D/2.jpg",
        "https://i.ibb.co/sWpqz8x/3.jpg",
      ],
      price: 1850,
      sellPrice: 1850,
      brand: "Filament",
      model: "3044",
      sku: "14800--2-",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Diameter Format: 1.75mm",
        "Print Temp.: 210-235℃",
        "Tolerance: ±0.02mm",
        "Print Speed： 50-100mm/s",
        "Platform Temp： Depends on the structure: No need or 60-80℃",
        "Length: 330m",
        "Tensile Strength: 11-15kgf",
        "Melt Flow Rate: 9-11g/10 min(190℃,2.16kg)",
        "Certificate: RoHS, Reach",
        "color: BLACK",
      ],
    },
    {
      name: "HIGH QUALITY MK8 EXTRUDER NOZZLES 0.6MM NOZZLE MK8 EXTRUSION 3D PRINTER NOZZLE",
      category: "3d printers $ cnc",
      images: [
        "https://i.ibb.co/zX7J54g/1.webp",
        "https://i.ibb.co/C62ytTs/2.webp",
        "https://i.ibb.co/fqTFD9s/3.webp",
        "https://i.ibb.co/mCKMHhv/5.webp",
      ],
      price: 74,
      sellPrice: 74,
      brand: "Brass",
      model: "4106",
      sku: "50000-0-B/5",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Item Type: Printer Brass Nozzle",
        "Material: Brass ",
        "Color: As the Picture Shown ",
        "Working Temperature: 280",
        "Installation Type: External Thread Connection ",
        "Nozzle Precision: 0.6mm",
        "Input Diameter: 1.75mm",
        "Size: 13*5.8mm",
      ],
    },
    {
      name: '5" SPEAKER 5CORE 5C-5012 (1PCS)',
      category: "sound system",
      images: [
        "https://i.ibb.co/ZTm78HK/1.jpg",
        "https://i.ibb.co/BfjsyPW/2.jpg",
        "https://i.ibb.co/N7FhXHw/3.jpg",
      ],
      price: 685,
      sellPrice: 685,
      brand: "5 core",
      model: "2589",
      sku: "20000-1-",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        '5" Speaker 5core',
        `5.25"`,
        "40W max",
        "model: 5C-5012",
        "Dual Cone Speaker",
        "Diffusore Dual Cone vie",
        "HP Dual Cone Voice ",
        "1 pcs",
      ],
    },
    {
      name: "BOSCHMANN PR-1610 200WATT SPEAKER SET ( 1 PAIR)",
      category: "sound system",
      images: [
        "https://i.ibb.co/2n5LfWT/1.webp",
        "https://i.ibb.co/6Hxj3sD/2.webp",
        "https://i.ibb.co/hd3tmw4/3.webp",
        "https://i.ibb.co/dkTVDDz/4.webp",
        "https://i.ibb.co/zNRSJxp/5.webp",
      ],
      price: 1088,
      sellPrice: 1088,
      brand: "BOSCHMANN",
      model: "3870",
      sku: "70000-0-",
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Model : PR-1610",
        `Recommended Amplification: 5-72 WRMS`,
        "Handling CAPACITTY : 200 watt",
        "Frequency response response range : 70 - 22 kHz",
        "Normal Circuitry Impedance :  4 Ohm",
        "Speaker 1 pair",
        "2x Wire",
        "Nut & Screw",
      ],
    },
  ],
  categories: [
    {
      name: "3d printers $ cnc",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    { name: "accessories", image: "https://i.ibb.co/yBC6whs/category.png" },
    { name: "sound system", image: "https://i.ibb.co/yBC6whs/category.png" },
    {
      name: "electrical accessories & iot",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    {
      name: "drones & rc hobby",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    {
      name: "electronic",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
  ],
};

export default data;
