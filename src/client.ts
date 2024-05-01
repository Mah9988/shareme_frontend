import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9yv041i7",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "sk86KSNBiWtFzOgQ8het0c3k33s4rls4kmo9G2Y9H5iHCfuW7kRbfBoEa9ToGvkXqfjGlsuc0idyiFlzSw6G1eT9O6KeBajFO21vXeofUMjOVKck2iy0nWrjuZWdhCrkidfrYLkdhk9loGK59kL5oE1YcbBxpqnDFa2sGORdMjB0hggSY9qS",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
