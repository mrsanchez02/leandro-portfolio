import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlers must be able to read the noindex HTML on unconfigured exports.
    rules: { userAgent: "*", allow: "/" },
    sitemap: siteOrigin ? `${siteOrigin}/sitemap.xml` : undefined,
  };
}
