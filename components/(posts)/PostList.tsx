import PostPreview from 'components/(posts)/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function PostList({
  posts,
  title = '',
}: {
  posts: Post[]
  title: string
}) {
  return (
    <section>
      <h3 className="mb-6">{title}</h3>
      <div className="md:gap-x-18 mb-32 grid grid-cols-1 gap-y-2">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            categories={post.categories}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
