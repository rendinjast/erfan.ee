import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'slug',
  pages: import.meta.glob('/src/content/posts/**/*.mdx', { eager: true }),
  getImageOptions: (_, post) => {
    const published = new Date(post.frontmatter.published).toDateString();
    const readingTime = `${post.frontmatter.readingTime} Minute Read`;

    return {
      title: post.frontmatter.title,
      description: `\n\n\n\n\n\n${published}        ${readingTime}`,
      logo: { path: './src/assets/favicon.ico', size: [60] },
      bgGradient: [[0, 0, 0]],
      border: { color: [10, 10, 10], width: 20 },
      font: {
        title: { families: ['FreePixel'], size: 60, color: [163, 163, 163], weight: 'Normal' },
        description: {
          families: ['Alagard'],
          size: 20,
          color: [115, 115, 115],
          weight: 'Normal',
        },
      },
    };
  },
});
