import type { MetadataRoute } from "next";
import { projectIds } from "@/content/projects";
import { locales, type LocalizedPage } from "@/lib/locales";
import { localizedUrls } from "@/lib/site-url";

export const dynamic = "force-static";

const pages: readonly LocalizedPage[] = [
  "home", "experience", "projects", "about", "contact",
  ...projectIds.map((id) => `projects/${id}` as const),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const languages = localizedUrls(page);
    return languages ? locales.map((locale) => ({ url: languages[locale], alternates: { languages } })) : [];
  });
}
