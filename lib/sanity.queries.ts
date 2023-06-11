import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  draft,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "categories": categories[]->{title, slug},
`

const seriesFields = groq`
  _id,
  draft,
  title,
  date,
  coverImage,
  "slug": slug.current,
  // posts[]->{postFields}
`

export const settingsQuery = groq`*[_type == "settings"][0]`

//SERIES QUERIES

export const getAllSeriesQuery = groq`
*[_type == "series"] | order(date desc, _updatedAt desc) {
  ${seriesFields}
}`

export const seriesAndMoreSeriesQuery = groq`
{
  "post": *[_type == "series" && slug.current == $slug && !series.draft] | order(_updatedAt desc) [0] {
    ${seriesFields}
  },
  "moreSeries": *[_type == "series" && slug.current != $slug && !series.draft] | order(date desc, _updatedAt desc) [0...2] {
    ${seriesFields}
  }
}`

export const seriesSlugsQuery = groq`
*[_type == "series" && defined(slug.current)][].slug.current
`

export const seriesBySlugQuery = groq`
*[_type == "series" && slug.current == $slug][0] {
  ${seriesFields}
}
`

//POST QUERIES
export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug && !post.draft] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug && !post.draft] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Category {
  title?: string
  slug?: string
  description?: string
}

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  categories?: Category[]
  slug?: string
  content?: any
}
export interface Series {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  slug?: string
  posts: Post[]
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
