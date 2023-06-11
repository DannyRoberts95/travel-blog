import HeroPost from 'components/(posts)/HeroPost'
import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/(posts)/MorePosts'
import * as demo from 'lib/demo.data'
import type { Series, Settings } from 'lib/sanity.queries'

export default function PostsIndexPage(props: {
  preview?: boolean
  loading?: boolean
  series: Series[]
  settings: Settings
}) {
  const { preview, loading, series, settings } = props

  // const { title = demo.title, description = demo.description } = settings || {}
  const [latestSeries, otherSeries] = series
  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <HeroPost {...latestSeries} />
          {otherSeries.length > 0 && <MoreStories posts={otherSeries} />}
        </Container>
      </Layout>
    </>
  )
}
