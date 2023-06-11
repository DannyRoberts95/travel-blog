import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import MoreStories from 'components/MoreStories'
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

  // const [latestPost, ...otherPosts] = posts

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          SERIES:{series.length}
          <div>{series.map((item) => item.title)}</div>
          {/* {otherPosts.length > 0 && <MoreStories posts={otherPosts} />} */}
        </Container>
      </Layout>
    </>
  )
}
