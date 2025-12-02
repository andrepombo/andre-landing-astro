import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(),
    href: z.string().url(),
    tags: z.array(z.string()),
    highlight: z.string().optional()
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(),
    href: z.string().url(),
    tags: z.array(z.string()),
    date: z.string()
  })
});

export const collections = { projects, articles };
