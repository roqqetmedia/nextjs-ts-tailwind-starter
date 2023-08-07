import { MetadataRoute } from "next";
import { APP_ENV, SITE_URL } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (APP_ENV === "production") {
    return [""].map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    }));
  }

  return [];
}
