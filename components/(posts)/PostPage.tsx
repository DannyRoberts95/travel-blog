import PostHeader from 'components/(posts)/PostHeader'
import MoreStories from 'components/(posts)/PostList'
import PostTitle from 'components/(posts)/PostTitle'
import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import RenderPortableText from 'components/RenderPortableText'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const { post = {} as any, morePosts = [] } = data || {}
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            {/* <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            /> */}
            <article>
              <RenderPortableText content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}
