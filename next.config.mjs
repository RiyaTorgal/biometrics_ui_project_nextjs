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
    domains: ["cdn.sanity.io"],
    // domains: [
    // "stylish-duck-63b45afbfa.media.strapiapp.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;