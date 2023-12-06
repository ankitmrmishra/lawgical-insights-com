import { createClient } from "next-sanity";

const projectId = "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
