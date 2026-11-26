
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Authors",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "role",
      title: "Professional Role",
      type: "string",
    }),
  ],
});
