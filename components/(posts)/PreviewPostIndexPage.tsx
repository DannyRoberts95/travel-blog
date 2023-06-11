'use client'

import PostsIndexPage from 'components/(posts)/PostsIndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  type Post,
  type Settings,
  indexQuery,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <PostsIndexPage preview posts={posts} settings={settings} />
}
