import { createClient } from "@sanity/client";
import { writer } from "../../../lib/sanity";

// const writer = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   token: process.env.SANITY_API_TOKEN!,
//   apiVersion: "2024-01-01",
//   useCdn: false,
// });

export async function POST(req: Request) {
  const { blogId, increment } = await req.json();

  const doc = await writer.fetch(
    `*[_type == "blog" && id.current == $blogId][0]{ _id, likes }`,
    { blogId }
  );

  if (!doc) return Response.json({ error: "Not found" }, { status: 404 });

  const updated = await writer
    .patch(doc._id)
    .set({ likes: Math.max(0, (doc.likes ?? 0) + increment) })
    .commit();

  return Response.json({ likes: updated.likes });
}