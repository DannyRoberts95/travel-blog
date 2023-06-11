import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import category from 'schemas/category'

import CategoryList from './CategoryList'
import Typography from './Typography'

export default function PostPreview(props: Omit<Post, '_id'>) {
  const { title, coverImage, date, categories = [], slug } = props

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md  grayscale transition-all hover:grayscale-0">
      <Link href={`/posts/${slug}`} className="">
        {coverImage && (
          <div className="absolute mb-5 h-full w-full">
            <CoverImage
              slug={slug}
              title={title}
              image={coverImage}
              priority={false}
            />
          </div>
        )}

        <div className="absolute top-0 mb-4 w-full p-4 text-3xl">
          <span className="text-white">
            <CategoryList categories={categories} disableAdd viewOnly />
          </span>
        </div>

        <div className="absolute bottom-0  w-full bg-gradient-to-t from-black to-transparent p-4 text-3xl">
          <h3 className="font-sans text-3xl capitalize leading-snug text-white">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  )
}
