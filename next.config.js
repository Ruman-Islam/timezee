/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "res.cloudinary.com",
      "wallpaperaccess.com",
    ],
  },
};
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '3000',
//         pathname: 'http://localhost:3000/',
//       },
//     ],
//   },
// }
// module.exports = {
//   images: {
//     domains: ['i.ibb.co'],
//   },
// }
