import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    ref: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    href: z.string().optional(),
    tags: z.array(z.string()).default([]),
    highlight: z.string().optional(),
    grayscale: z.boolean().optional(),
    lang: z.enum(['en', 'pt']).default('en')
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    href: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.string().or(z.date())
  })
});

export const collections = { projects, articles };
