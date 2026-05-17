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
  const { blogId, comment } = await req.json();

  const doc = await writer.fetch(
    `*[_type == "blog" && id.current == $blogId][0]{ _id }`,
    { blogId }
  );

  if (!doc) return Response.json({ error: "Not found" }, { status: 404 });

  await writer
    .patch(doc._id)
    .setIfMissing({ comments: [] })
    .append("comments", [comment])
    .commit();

  return Response.json({ ok: true });
}

export async function GET() {
  const blogs = await writer.fetch(
    `*[_type == "blog"]{ "id": id.current, comments }`
  );
  const map = Object.fromEntries(
    blogs.map((b: any) => [b.id, b.comments ?? []])
  );
  return Response.json(map);
}