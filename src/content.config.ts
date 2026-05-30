import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
	schema: z.object({
		order: z.number().int().nonnegative(),
		title: z.string(),
		description: z.string().optional(),
		href: z.url()
	})
});

export const collections = { projects };