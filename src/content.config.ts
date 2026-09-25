import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const whitepaper = defineCollection({
  loader: glob({ pattern: "whitepaper.md", base: "src/content/whitepaper" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    subtitle: z.string(),
  }),
});

const section = <T extends z.ZodTypeAny>(pattern: string, schema: T) =>
  defineCollection({
    loader: glob({ pattern, base: "src/content/sections" }),
    schema,
  });

const homeBanner = section(
  "home-banner.md",
  z.object({
    eyebrow: z.string(),
    title: z.string(),
    highlight: z.string(),
    description: z.string(),
    ringText: z.string(),
  }),
);

const vision = section(
  "vision.md",
  z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()),
    quote: z.string(),
  }),
);

const features = section(
  "features.md",
  z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    pfife: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      points: z.array(z.string()),
    }),
  }),
);

const tokenomics = section(
  "tokenomics.md",
  z.object({
    totalSupply: z.string(),
    allocation: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
        percent: z.number(),
        tokens: z.string(),
        color: z.string(),
      }),
    ),
    presale: z.array(
      z.object({
        label: z.string(),
        percent: z.number(),
      }),
    ),
    mechanics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    ),
    versions: z.array(
      z.object({
        tag: z.string(),
        title: z.string(),
        status: z.string(),
        points: z.array(z.string()),
      }),
    ),
  }),
);

const roadmap = section(
  "roadmap.md",
  z.object({
    stages: z.array(
      z.object({
        stage: z.number(),
        name: z.string(),
        title: z.string(),
        status: z.enum(["current", "upcoming", "sealed"]),
        summary: z.string(),
        items: z.array(z.string()),
      }),
    ),
  }),
);

const team = section(
  "team.md",
  z.object({
    members: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        avatar: z.string(),
        bio: z.string(),
      }),
    ),
  }),
);

const faq = section(
  "faq.md",
  z.object({
    list: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
);

export const collections = {
  pages: pagesCollection,
  whitepaper,
  homeBanner,
  vision,
  features,
  tokenomics,
  roadmap,
  team,
  faq,
};
