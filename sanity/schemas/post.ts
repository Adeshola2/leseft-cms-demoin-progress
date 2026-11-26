
import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),

    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
