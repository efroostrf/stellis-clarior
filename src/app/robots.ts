import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: ["/api/", "/_next/", "/static/"],
    },
    sitemap: "https://wwww.stellisclarior.com/sitemap.xml",
  };
};

export default robots;
