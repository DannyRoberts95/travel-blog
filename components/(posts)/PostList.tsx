import PostPreview from 'components/(posts)/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <section className="mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          categories={post.categories}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  )
}
