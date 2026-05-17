import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "r78pbx27",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const writer = createClient({
  projectId: "r78pbx27",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});