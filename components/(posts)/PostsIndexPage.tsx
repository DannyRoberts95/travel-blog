import PostList from 'components/(posts)/PostList'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import SectionSeparator from 'components/SectionSeparator'
import SectionSummary from 'components/SectionSummary'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export default function PostsIndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}) {
  const { preview, loading, posts, settings } = props

  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <SectionSeparator />
        <SectionSummary
          title="Stoa Articles"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        />
        <SectionSeparator />
        {posts.length > 0 && <PostList posts={posts} />}
      </Container>
    </Layout>
  )
}
