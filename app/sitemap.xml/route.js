/**
 * This file replaced with sitemap.js for revalidate
 */

import { supabase } from "../db/supabase";

export async function GET() {
    const headers = new Headers();
    headers.set("Content-Type", "application/xml");
    const BaseURL = "https://front-farsi.vercel.app";

    const posts = await supabase.from("weblog").select("id,updated_at").eq("published", true);
    const postsMap = posts?.data.map((item) => {
        const time = new Date(item.updated_at).toISOString()
        return `
        <url>
            <loc>${BaseURL}/blog/${item.id}</loc>
            <lastmod>${time}</lastmod>
        </url>
    `;
    });

    return new Response(
        `<?xml version="1.0" encoding="UTF-8" ?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${BaseURL}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            <url>
                <loc>${BaseURL}/blog</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            <url>
                <loc>${BaseURL}/about-me</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
            ${postsMap}
          </urlset>
      `,
        {
            headers,
        }
    );
}

export const revalidate = 3600;
