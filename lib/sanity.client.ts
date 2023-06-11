import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Post,
  type Series,
  type Settings,
  //series
  getAllSeriesQuery,
  //posts
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  seriesAndMoreSeriesQuery,
  seriesBySlugQuery,
  seriesSlugsQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

// SETTINGS

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

// POSTS

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}

// SERIES

export async function getAllSeries(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(getAllSeriesQuery)) || []
  }
  return []
}

export async function getAllSeriesSlugs(): Promise<Pick<Series, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(seriesSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getSeriesBySlug(slug: string): Promise<Series> {
  if (client) {
    return (await client.fetch(seriesBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getSeriesAndMoreSeries(
  slug: string,
  token?: string | null
): Promise<{ series: Series | null; moreSeries: Series[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(seriesAndMoreSeriesQuery, { slug })
  }
  return { series: null, moreSeries: [] }
}
