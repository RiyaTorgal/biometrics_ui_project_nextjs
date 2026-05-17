// export const revalidate = 30;

// import BlogsAndTestimonies from "./BlogsandTestimonies";

// export default async function Page() {
// //   const data = await getBlogsPage();
//   return <BlogsAndTestimonies 
//     // data={data}
//   />;
// }

export const revalidate = 30;

import BlogsAndTestimonies from "./BlogsandTestimonies";
import { getBlogs, getTestimonies } from "../lib/queries";

export default async function Page() {
  const [blogs, testimonies] = await Promise.all([getBlogs(), getTestimonies()]);
  return <BlogsAndTestimonies 
  blogs={blogs} testimonies={testimonies} 
  />;
}