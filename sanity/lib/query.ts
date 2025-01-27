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

export const START_QUERY_BY_ID = defineQuery(`
  *[
    _type == "startup" && _id == $id][0] {
    _id,
    slug,
    title,
    view,
    image,
    author->{_id, name,username, bio, image},
    category,
    description,
    _createdAt,
    pitch
  }
`);

