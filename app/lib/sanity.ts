import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "r78pbx27",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});