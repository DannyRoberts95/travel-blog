import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import category from 'schemas/category'

import CategoryList from './CategoryList'

export default function PostPreview(props: Omit<Post, '_id'>) {
  const { title, coverImage, date, categories = [], slug } = props

  console.log(props)

  return (
    <div>
      <Link href={`/posts/${slug}`} className="">
        {coverImage && (
          <div className="mb-5">
            <CoverImage
              slug={slug}
              title={title}
              image={coverImage}
              priority={false}
            />
          </div>
        )}

        <div className="mb-4 text-3xl">
          <Date dateString={date} />
        </div>
        <h3 className="text-grey-100 mb-3 text-lg leading-snug">{title}</h3>
      </Link>
      <CategoryList categories={categories} disableAdd viewOnly />
    </div>
  )
}
