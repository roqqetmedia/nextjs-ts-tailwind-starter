import { MetadataRoute } from "next";
import { APP_ENV, SITE_URL } from "@/config";

export default function robots(): MetadataRoute.Robots {
  if (APP_ENV === "production") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${SITE_URL}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
