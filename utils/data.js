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
      id: 1,
      name: "Baume Mercier Motorcycle Watches",
      category: "men",
      images: ["https://i.ibb.co/qNg11VR/watch1.webp"],
      price: 75,
      sellPrice: 75,
      countInStock: 20,
      brand: "Tissot",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
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
      id: 2,
      name: "Black Leather Watch",
      category: "men",
      images: ["https://i.ibb.co/GWGqq8H/watch2.webp"],
      price: 42,
      sellPrice: 42,
      countInStock: 20,
      brand: "Casio",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 3,
      name: "Brompton White Dial Bracelet Watch",
      category: "men",
      images: ["https://i.ibb.co/5ncjQcy/watch3.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Seiko",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 4,
      name: "Claude Bernard",
      category: "women",
      images: ["https://i.ibb.co/JyD5hcx/watch4.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Orient",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 5,
      name: "Glycine Watch",
      category: "women",
      images: ["https://i.ibb.co/vHczvcN/watch5.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Richard Mille",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 6,
      name: "Just Cavalli",
      category: "women",
      images: ["https://i.ibb.co/SJfdVTr/watch6.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Cartier",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 7,
      name: "Dixit Analog Watch",
      category: "kid",
      images: ["https://i.ibb.co/D7SRQwt/watch7.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Swatch",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
    {
      id: 8,
      name: "Chess Master Classic",
      category: "kid",
      images: ["https://i.ibb.co/gvTLrQy/watch8.webp"],
      price: 60,
      sellPrice: 60,
      countInStock: 60,
      brand: "Timex",
      model: "2361",
      size: "xl",
      sku: "39000--3-W-37",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
      specification: [
        "Size: 40mm",
        "Strap: Top Genuine Leather Strap + Nylon Grosgrain Strap",
        "Case: Original 316L stainless steel",
        "Original Movement: Japan",
        "Movement Type: Quartz",
        "Waterproof: Case Water Resistant 3ATM",
        "Lugged case design",
        "Flat scratch-resistant sapphire glass lens at circular face",
        "Package: Including leather watches box",
      ],
    },
  ],
  categories: [
    {
      name: "men",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    { name: "women", image: "https://i.ibb.co/yBC6whs/category.png" },
    {
      name: "kid",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
  ],
  brands: [
    {
      name: "Tissot",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    { name: "Casio", image: "https://i.ibb.co/yBC6whs/category.png" },
    { name: "Seiko", image: "https://i.ibb.co/yBC6whs/category.png" },
    {
      name: "Orient",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    {
      name: "Richard Mille",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    {
      name: "Cartier",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
    {
      name: "Timex",
      image: "https://i.ibb.co/yBC6whs/category.png",
    },
  ],
};

export default data;
