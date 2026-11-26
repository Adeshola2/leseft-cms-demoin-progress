
import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Optional Lucide icon name, e.g. briefcase",
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "features",
      title: "Service Features",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "featured",
      title: "Featured Service",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
