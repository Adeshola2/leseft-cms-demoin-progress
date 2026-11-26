
import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members",
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
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn Profile",
      type: "url",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
