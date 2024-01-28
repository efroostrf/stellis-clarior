import { eq } from "drizzle-orm";
import {
  EnumChangefreq,
  SitemapItem,
  SitemapStream,
  streamToPromise,
} from "sitemap";
import { Readable } from "stream";

import { db } from "@/drizzle/db";
import { posts } from "@/drizzle/schema";

export const dynamic = "force-dynamic";

const constantPages: Partial<SitemapItem>[] = [
  {
    url: "/",
    priority: 1,
    changefreq: EnumChangefreq.DAILY,
  },
  {
    url: "/blog",
    priority: 0.6,
    changefreq: EnumChangefreq.DAILY,
  },
];

export const GET = async () => {
  const postsData = await db.query.posts.findMany({
    where: eq(posts.isDraft, false),
  });

  const stream = new SitemapStream({
    hostname: "https://www.stellisclarior.com/",
  });

  const write = (item: Partial<SitemapItem>) => stream.write(item);

  // Write constant pages
  constantPages.forEach(write);

  // Write pages
  for (const { slug, updatedAt } of postsData) {
    write({
      url: `/blog/${slug}`,
      priority: 0.8,
      changefreq: EnumChangefreq.DAILY,
      lastmod: new Date(updatedAt).toISOString(),
    });
  }

  // End stream of sitemap
  stream.end();

  // Ready to render xml for client
  const xml = await streamToPromise(Readable.from(stream)).then((data) =>
    data.toString()
  );

  const res = new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });

  return res;
};
