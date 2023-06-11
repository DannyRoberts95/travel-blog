import PostPreview from 'components/(posts)/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({
  posts,
  title = '',
}: {
  posts: Post[]
  title: string
}) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        {title}
      </h2>
      <div className="md:gap-x-18 mb-32 grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
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
