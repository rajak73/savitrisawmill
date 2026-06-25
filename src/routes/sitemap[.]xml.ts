import { createServerFileRoute } from "@tanstack/react-start/server";

const BASE_URL = "https://savitrisawmill.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const ServerRoute = createServerFileRoute("/sitemap.xml").methods({
  GET: async () => {
    const entries: SitemapEntry[] = [
      { path: "/", changefreq: "weekly", priority: "1.0" },
      { path: "/about", changefreq: "monthly", priority: "0.8" },
      { path: "/products", changefreq: "weekly", priority: "0.9" },
      { path: "/services", changefreq: "monthly", priority: "0.8" },
      { path: "/gallery", changefreq: "monthly", priority: "0.6" },
      { path: "/contact", changefreq: "monthly", priority: "0.7" },
    ];
    const urls = entries
      .map(
        (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
      )
      .join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
});
