
import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Client Position",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Client Photo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "quote",
      title: "Testimonial",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
