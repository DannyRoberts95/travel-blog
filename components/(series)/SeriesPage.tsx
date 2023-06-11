import PostHeader from 'components/(posts)/PostHeader'
import MoreStories from 'components/(posts)/PostList'
import PostTitle from 'components/(posts)/PostTitle'
import SeriesHeader from 'components/(series)/SeriesHeader'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import RenderPortableText from 'components/RenderPortableText'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Series, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { series: Series; moreSeries: Series[] }
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const { series = {} as any, moreSeries = [] } = data || {}
  const { title = demo.title } = settings || {}

  const slug = series?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        {preview && !series ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            {series.title} : {series.posts.length}
            {series.posts.map((post) => (
              <p>{post.title}</p>
            ))}
            <SectionSeparator />
            {/* {morePosts?.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  )
}
