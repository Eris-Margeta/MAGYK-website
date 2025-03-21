import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// pages collection
const companyPageCollection = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/company",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

const contactPageCollection = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    pageHeader: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/events",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

const newsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/news",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean(),

    hero: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

const resourcesCollection = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/resources",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

// Regular Pages collection schema
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

// sections collection
const homeBanner = defineCollection({
  loader: glob({
    pattern: "home-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    quote: z.string(),
  }),
});

const aboutCompany = defineCollection({
  loader: glob({
    pattern: "about-company.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    descriptionList: z.array(
      z.object({
        title: z.string(),
      })
    ),
  }),
});

const trustedBrands = defineCollection({
  loader: glob({
    pattern: "trusted-brands.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(
      z.object({
        brand: z.string(),
        logo: z.string(),
      })
    ),
  }),
});

const serviceSummaryCards = defineCollection({
  loader: glob({
    pattern: "service-summary-cards.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
        logo: z.string(),
      })
    ),
  }),
});

const ctaSmall = defineCollection({
  loader: glob({
    pattern: "call-to-action-small.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const cta = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections/",
  }),
  schema: z.object({
    enable: z.boolean(),
    head: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    shapes: z.array(
      z.object({
        image: z.string(),
      })
    ),
  }),
});

const faq = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    title: z.string(),
    list: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const howItWorks = defineCollection({
  loader: glob({
    pattern: "how-it-works.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    title: z.string(),
    subtitle: z.string(),
    list: z
      .array(
        z.object({
          title: z.string(),
        })
      )
      .max(5),
    centerImage: z.string(),
  }),
});

const investors = defineCollection({
  loader: glob({
    pattern: "investors.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    investorList: z.array(
      z.object({
        brand: z.string(),
        logo: z.string(),
      })
    ),
  }),
});

const ourTeam = defineCollection({
  loader: glob({
    pattern: "our-team.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    memberList: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
      })
    ),
  }),
});

const services = defineCollection({
  loader: glob({
    pattern: "services.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    serviceList: z.array(
      z.object({
        head: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
        }),
        list: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      })
    ),
  }),
});

const testimonial = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        content: z.string(),
      })
    ),
  }),
});

const whyUs = defineCollection({
  loader: glob({
    pattern: "why-us.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    head: z.string(),
    title: z.string(),
    description: z.string(),
    marqueeTextList: z.array(
      z.object({
        textList: z.array(z.string()),
      })
    ),
  }),
});

export const collections = {
  // pages
  companyPageCollection,
  contactPageCollection,
  pages: pagesCollection,
  events: eventsCollection,
  news: newsCollection,
  resources: resourcesCollection,

  // sections
  homeBanner,
  aboutCompany,
  trustedBrands,
  serviceSummaryCards,
  ctaSmall,
  cta,
  faq,
  howItWorks,
  investors,
  ourTeam,
  services,
  testimonial,
  whyUs,
};
