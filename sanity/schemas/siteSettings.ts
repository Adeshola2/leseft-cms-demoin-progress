
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "siteName",
      title: "Website Name",
      type: "string",
      initialValue: "LeSeft Nigeria",
    }),

    defineField({
      name: "tagline",
      title: "Website Tagline",
      type: "string",
    }),

    defineField({
      name: "logo",
      title: "Website Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Contact Phone",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "Profile URL",
              type: "url",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "footerText",
      title: "Footer Copyright Text",
      type: "string",
    }),
  ],
});
