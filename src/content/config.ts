import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        github: z.string().url().optional(),
        tags: z.array(z.string()).default([]),

        // Optional: show an architecture diagram on the project page
        diagram: z.string().optional(), // e.g. "/projects/terraform-ha-bluegreen/architecture.png"

        // Optional: display/sort
        date: z.string().optional(), // "2025-12-28"
        status: z.enum(["active", "completed", "wip"]).optional(),
    }),
});

export const collections = { projects };
