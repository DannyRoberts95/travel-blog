import PostTitle from 'components/(posts)/PostTitle'
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/DateDisplay'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>
) {
  const { title, coverImage, date, slug } = props
  return (
    <>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>

      <PostTitle>{title}</PostTitle>

      <div className="mx-auto max-w-2xl border-t-2 border-black pt-4">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
