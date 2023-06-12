import PostTitle from 'components/(posts)/PostTitle'
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/DateDisplay'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <div className="mx-auto max-w-2xl border-t-2 border-black pt-4">
        <div className="hidden md:mb-12 md:block">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>

        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg"></div>
      </div>
    </>
  )
}
