// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   // remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "example.com",
//   //     },
//   //     {
//   //       protocol: "https",
//   //       hostname: "cdn.example.com",
//   //     },
//   //   ],
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;