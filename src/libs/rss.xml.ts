import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');

  return rss({
    title: 'Blog | Erfan Khadivar',
    description: 'FullStack JavaScript Engineer',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.published,
    })),
  });
};
