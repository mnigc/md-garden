import { defineCollection,z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// 定义一个名为 "docs" 的集合
const docsCollection = defineCollection({
	schema: z.object({
	  title: z.string(), // 每篇文章必须有 title 字段
	  description: z.string().optional(), // 可选字段
	  date: z.date().optional(), // 可选字段
	}),
  });
  

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
};

