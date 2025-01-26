import { defineQuery } from "next-sanity";

export const START_QUERY = defineQuery(`
  *[
    _type == "startup" && 
    defined(slug.current) && 
    (
      !defined($search) || 
      category match $search || 
      author->name match $search || 
      title match $search
    )
  ] | order(_createdAt desc) {
    _id,
    slug,
    title,
    view,
    image,
    author->{_id, name, bio, image},
    category,
    description,
    _createdAt,
    pitch
  }
`);
