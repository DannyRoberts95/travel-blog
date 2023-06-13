'use client'
import SectionSummary from '@components/SectionSummary'
import PostPage from 'components/(posts)/PostPage'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import SectionSeparator from 'components/SectionSeparator'
import type { Series, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function SeriesPage(props: {
  preview?: boolean
  loading?: boolean
  series: Series
  moreSeries: Series[]
  settings: Settings
}) {
  const { preview, loading, series = {} as any, settings } = props

  // const { title = demo.title } = settings || {}
  // const { posts = [], title: seriesTitle, description = '' } = series

  const slug = series?.slug

  if (!series || (!slug && !preview)) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <SectionSummary title={series.title} description={series.description} />
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
