'use client'
import PostHeader from 'components/(posts)/PostHeader'
import MoreStories from 'components/(posts)/PostList'
import PostPage from 'components/(posts)/PostPage'
import PostTitle from 'components/(posts)/PostTitle'
import SeriesHeader from 'components/(series)/SeriesHeader'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import RenderPortableText from 'components/RenderPortableText'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Series, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function SeriesPage(props: {
  preview?: boolean
  loading?: boolean
  data: { series: Series; moreSeries: Series[] }
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const { series = {} as any, moreSeries = [] } = data || {}

  // const { title = demo.title } = settings || {}
  // const { posts = [], title: seriesTitle, description = '' } = series

  const slug = series?.slug

  if (!series || (!slug && !preview)) {
    notFound()
  }

  console.log(series)

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <h2>{series.title}</h2>
        <p>{series.posts.length}</p>
        <SectionSeparator />
        {series.posts.map((post, i) => {
          return (
            <>
              <h2 className="p-5"> Chapter {i + 1} </h2>
              <PostPage key={post.slug} post={post} settings={settings} />
            </>
          )
        })}
      </Container>
    </Layout>
  )
}
