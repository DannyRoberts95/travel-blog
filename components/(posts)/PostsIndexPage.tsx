import HeroPost from 'components/(posts)/HeroPost'
import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/(posts)/MorePosts'
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

  const [latestPost, ...otherPosts] = posts

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <HeroPost {...latestPost} />
          {otherPosts.length > 0 && <MoreStories posts={otherPosts} />}
        </Container>
      </Layout>
    </>
  )
}
