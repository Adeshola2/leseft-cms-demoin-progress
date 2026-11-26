
import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    "author": author->{
      name,
      image,
      role
    },
    "categories": categories[]->{
      title,
      slug
    }
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    image,
    icon,
    features,
    featured
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    image,
    bio,
    linkedin
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    company,
    image,
    quote,
    featured
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    logo,
    email,
    phone,
    address,
    socialLinks,
    footerText
  }
`;
