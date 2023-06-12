import PageSummary from '@components/SectionSummary'
import PostList from 'components/(posts)/PostList'
import PostTitle from 'components/(posts)/PostTitle'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import ChipList from 'components/CategoryList'
import CoverImage from 'components/CoverImage'
import PostDate from 'components/DateDisplay'
import RenderPortableText from 'components/RenderPortableText'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  morePosts?: Post[]
  post: Post

  settings: Settings
}) {
  const { preview, loading, settings, post = {} as any, morePosts = [] } = props

  const { title = demo.title } = settings || {}

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className=" mb-8  sm:mx-0 md:mb-16">
            <div className="sticky top-10">
              <PostDate dateString={post.date} className="mb-4" />

              <CoverImage
                image={post.coverImage}
                priority
                className=" mb-6 block md:hidden"
              />
              <PostTitle>{post.title}</PostTitle>

              <ChipList categories={post.categories} />
            </div>
          </div>

          <article className="">
            <CoverImage
              image={post.coverImage}
              priority
              className=" mb-6 hidden md:block"
            />
            <RenderPortableText content={post.content} />
          </article>
        </div>

        <SectionSeparator />
        {morePosts?.length > 0 && (
          <>
            <PageSummary title={'Further Reading '} />
            <PostList posts={morePosts} />
          </>
        )}
      </Container>
    </Layout>
  )
}
